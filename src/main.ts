

import { getRfD, listContaminants } from "./services/contaminants.js";
import { calculateRisk } from "./services/calculator.js";
import { IntakeParameters } from "./types/types.js";

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("contaminant-input") as HTMLSelectElement;
  const calculateButton = document.getElementById("calculateBtn");

  const contaminantNames = listContaminants();

  contaminantNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });

  calculateButton?.addEventListener("click", handleCalculation);
});

function handleCalculation() {
  const select = document.getElementById("contaminant-input") as HTMLSelectElement;
  const contaminantName = select.value;

  if (!contaminantName) {
    alert("Por favor, selecione um contaminante.");
    return;
  }

  const params: IntakeParameters = {
    C:  Number((document.getElementById("C")  as HTMLInputElement).value),
    IR: Number((document.getElementById("IR") as HTMLInputElement).value),
    EF: Number((document.getElementById("EF") as HTMLInputElement).value),
    ED: Number((document.getElementById("ED") as HTMLInputElement).value),
    BW: Number((document.getElementById("BW") as HTMLInputElement).value),
    AT: Number((document.getElementById("AT") as HTMLInputElement).value)
  };

  if (Object.values(params).some(value => isNaN(value) || value < 0)) {
    alert("Erro: Por favor, preencha todos os campos com números positivos válidos.");
    return;
  }

  if (params.BW === 0 || params.AT === 0) {
    alert("Erro: Peso Corporal (BW) e Tempo Médio (AT) não podem ser zero.");
    return;
  }

  const rfd = getRfD(contaminantName);
  if (!rfd) {
    alert(`Erro: O contaminante "${contaminantName}" não foi encontrado.`);
    return;
  }

  const result = calculateRisk(rfd, params);

  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.innerHTML = `
      <h3>Resultado da Análise:</h3>
      <p><strong>Ingestão (I):</strong> ${result.I.toExponential(4)} mg/(kg·dia)</p>
      <p><strong>Quociente de Risco (QR):</strong> ${result.QR.toFixed(4)}</p>
      <p><strong>Conclusão:</strong> ${result.risk}</p>
    `;
  }
}
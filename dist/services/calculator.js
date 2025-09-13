export function calculateRisk(rfd, params) {
    const { C, IR, EF, ED, BW, AT } = params;
    // Cálculo da ingestão média diária
    const I = (C * IR * EF * ED) / (BW * AT);
    // Quociente de Risco
    const QR = I / rfd;
    return {
        I,
        QR,
        risk: QR > 1
            ? " Potencial risco à saúde"
            : " Risco dentro do limite aceitável"
    };
}

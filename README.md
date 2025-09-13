# Calculadora de Risco Não-Cancerígeno - Teste REMA/UFSC

Aplicação desenvolvida como parte do processo seletivo de bolsa para projetos de software 3D do Núcleo Ressacada de Pesquisas em Meio Ambiente (REMA) da Universidade Federal de Santa Catarina (UFSC).

O objetivo da aplicação é avaliar o risco não carcinogênico à saúde humana com base nas equações e dados toxicológicos de referência.

---

## Funcionalidades

* **Cálculo de Risco Preciso:** Implementa as equações de Ingestão (I) e Quociente de Risco (QR) conforme especificado.
* **Base de Dados Completa:** Permite a seleção de mais de 900 contaminantes com suas respectivas Doses de Referência (RfD).
* **Interface Moderna:** Interface de usuário limpa, reativa e fácil de usar, construída com ferramentas modernas.
* **Validação em Tempo Real:** Fornece feedback ao usuário para garantir que os dados de entrada sejam válidos antes do cálculo.

---

## Pré-requisitos

Para executar este projeto, você precisará ter instalado em sua máquina:

* **Node.js**: Versão **20.19.0** ou superior.
* **npm** (Node Package Manager): Geralmente instalado junto com o Node.js.

---

## Instruções de Instalação e Execução

Para rodar a aplicação a partir do arquivo `.zip`:

1.  **Descompactar o Arquivo**
    Primeiramente, descompacte o arquivo `.zip` do projeto em uma pasta de sua preferência.

2.  **Navegar até a Pasta do Projeto**
    Abra seu terminal (CMD, PowerShell, etc.) e navegue até a pasta que você acabou de criar.
    ```bash
    cd caminho/para/a/pasta/do/projeto
    ```

3.  **Instalar as Dependências**
    Execute o seguinte comando para instalar todas as dependências listadas no `package.json`:
    ```bash
    npm install
    ```

4.  **Iniciar a Aplicação**
    Para iniciar o servidor de desenvolvimento e visualizar a aplicação, execute:
    ```bash
    npm run dev
    ```

5.  **Acessar a Calculadora**
    O terminal exibirá um endereço local. Abra seu navegador de internet e acesse o link fornecido (geralmente **http://localhost:5173**). A aplicação estará pronta para uso.

---

## Scripts Disponíveis

* **`npm run dev`**: Inicia o servidor de desenvolvimento com Vite.
* **`npm run build`**: Compila e otimiza a aplicação para produção, gerando a pasta `dist`.


---
*Desenvolvido em Florianópolis, 13 de Setembro de 2025.*
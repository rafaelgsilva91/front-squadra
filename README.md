# Front Squadra
  - Teste full stack

# Problemas na API
  - Comportamento inesperado na rota /api/v1/pessoa metodo DELETE
    - A rota não tem parâmetro de identificação do registro a ser excluído.
    - O factorie deletarPessoaFactory estava passando o useCase errado.

  - Comportamento inesperado na rota /api/v1/pessoa/:id metodo GET
    - O controller (PessoaController) não específicou o paramêtro desejado, no caso o ID pessoa.

# Front Squadra
  - Teste full stack

![alt text](https://github.com/rafaelgsilva91/front-squadra/blob/main/src/components/home/logo.png?raw=true)

# Problemas na API
  - Comportamento inesperado na rota /api/v1/pessoa metodo DELETE
    - A rota não tem parâmetro de identificação do registro a ser excluído.
    - O factorie deletarPessoaFactory estava passando o useCase errado.

  - Comportamento inesperado na rota /api/v1/pessoa/:id metodo GET
    - O controller (PessoaController) não específicou o paramêtro desejado, no caso o ID pessoa.

## License
[MIT](https://choosealicense.com/licenses/mit/)

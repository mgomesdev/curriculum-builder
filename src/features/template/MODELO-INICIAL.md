### Modelo inicial

#### Recursos

- [x] - sabe-se que eu tenho acesso a arvore do react através do .children

#### Fluxo

- [x] - sistema bate na api que responde com um json com a arvore do template com tudo montado.
- [x] - o sistema carrega esse json e mapeia para os componentes específicos e monta a arvore do react com tudo configurado (...props).
- [] - O usuario tem a possibilidade de clicar em cima dos elementos da arvore e inicialmente pode fazer as seguintes mudanças:
  - [] - alterar o texto do elemento clicado.
  - [] - reordenar.
  - [] - é possivel todas as coisas, mas o objetivo aqui é editar um modelo pré-pronto e não um site builder (mas é a mesma ideia).
- [] - Após realizar as mudanças, o usuario clica em salvar, que envia a nova arvore com os dados alterados e ordem reordenada.
  - [] - a arvore antiga, é substituida pela nova.
  - [] - o cliclo se repete e o novo template está de acordo com a ultima modificação.

#### Beneficios

- [] - dinamismo com as alterações, alterando facilmente na tela.
- [] - eliminação de endpoints para alterar cada informação da tela.
- [] - economia de armazenamento, pois será armazenado um json vinculado ao usuario, pode ser banco nosql.

#### Como seria um sistema nessa ideia com mais templates ?

- [] - sabendo que os componentes mapeiam a arvore que vai vir do backend, e monta a tela, após finalizar a montagem, é gerado um DOMTOJSON para criar a arvore do template para ser armazenado no banco.
- [] - isso é uma espécie de 'site builder', com a diferença de que os elementos são colocados manualmente e não em algo como 'arrastar para a arvore'.
- [] - para tornar isso possivel, basta apenas criar uma interface e arrastar os componentes já existentes para montar a arvore.
- [] - resumindo, é um site builder, porem para o contexto inicial desse projeto, será focado em edição/reordenação das informações e geração da arvore do template com componentes manuais, podendo escalar para automação com drag indrop.

#### A IA pode gerar os templates ?

- [] - sabendo que a arvore do react é montada manualmente e que pode ser automatizada arrantando, isso quer dizer que temos uma padronização.
- [] - uma IA consegue pegar essse padrao e sair gerando os templates (precisa testar mais eu acho que funciona)

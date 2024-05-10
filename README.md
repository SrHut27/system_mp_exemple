# system_mp_exemple

Olá Aluno Maria Peregrina. Seja bem vindo ao repositório de exemplo do seu projeto final: um servidor que retorna seu portifólio de desenvolvimento. Quando tiver dúvidas, ou se sentir inseguro no projeto, acompanhe esse modelo. Mas não copie! Se apenas sair clicando ctrl C ctrl V, nunca vai aprender.

## Primeiro passo:

-> O aluno deve ter um repositório gitHub organizado e pronto para uso do primeiro passo do projeto (landing pages). O repositório raíz deve receber o nome "server", com duas pastas dentro: "controllers" e "routes". Dentro do repositório raíz do projeto, o server, crie o arquivo servidor, que deve ser chamado de app.js.

-[] Data de entrega: sábado 11/05/24

### Observações sobre Controllers e Routes em um Projeto Node.js Express
Em um projeto Node.js utilizando o framework Express, é comum dividir a lógica de manipulação de solicitações (requests) em duas partes principais: controllers e routes.

#### Controllers
Os controllers são responsáveis por conter as funções que definem a lógica de negócios da sua aplicação. Cada controller geralmente corresponde a um recurso ou entidade da sua aplicação. Eles encapsulam as operações relacionadas a esses recursos e são invocados pelas rotas para processar as solicitações do cliente.

Por exemplo, se estivermos construindo um sistema de blog, poderíamos ter um controller para manipular as postagens do blog. Este controller poderia conter funções para criar, atualizar, listar e excluir postagens. Dentro dessas funções, estarão as instruções para interagir com o banco de dados, validar dados, e assim por diante.

#### Routes
As rotas (routes) são responsáveis por mapear as solicitações HTTP para os controllers apropriados. Elas definem as URLs que a aplicação irá responder e especificam qual função do controller deve ser chamada para lidar com cada tipo de solicitação.

Por exemplo, uma rota poderia ser definida para lidar com solicitações GET para "/postagens", chamando a função correspondente no controller de postagens para retornar todas as postagens. Outra rota poderia ser definida para lidar com solicitações POST para "/postagens", chamando a função de criação no mesmo controller para adicionar uma nova postagem.

#### Organização do Projeto
Separar controllers e routes ajuda a manter o código organizado e modular, facilitando a manutenção e o desenvolvimento da aplicação. Isso também permite que diferentes partes da aplicação sejam modificadas ou substituídas com mais facilidade, seguindo os princípios de design de software como o princípio da responsabilidade única e a separação de preocupações.

Ao seguir essa estrutura, cada rota é tratada por um controller específico, tornando o código mais legível e facilitando a colaboração entre membros da equipe. Além disso, isso promove a reutilização de código, já que os controllers podem ser compartilhados entre diferentes rotas ou até mesmo entre diferentes projetos.

Em resumo, os controllers definem a lógica de negócios da aplicação, enquanto as rotas mapeiam as solicitações HTTP para esses controllers, garantindo uma separação clara de responsabilidades e facilitando o desenvolvimento e a manutenção do projeto.

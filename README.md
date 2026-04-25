Desafio API de Tarefas

Este projeto foi desenvolvido com o objetivo de criar uma aplicação simples de gerenciamento de tarefas .

Tecnologias utilizadas

-ASP.NET Core Web API
-Entity Framework Core
-SQL Server

Funcionalidades implementadas

-Criação de uma API REST para gerenciamento de tarefas
-Cadastro de novas tarefas
-Listagem de tarefas cadastradas

Cada tarefa possui:

-Id
-Título
-Descrição
-Status (Pendente/Concluída)
-Data de criação

O projeto foi iniciado com a criação da estrutura base da API utilizando ASP.NET Core.
Em seguida, criei a entidade Tarefa e o DbContext para integração com o banco de dados SQL Server utilizando o Entity Framework Core.
Após isso, realizei a configuração da conexão com o banco e a criação das migrations para gerar a tabela no banco de dados.
Implementei o controller responsável pelos endpoints da API, permitindo realizar operações de listagem e cadastro de tarefas.

▶️ Como executar o projeto

-Clonar o repositório
-Abrir o projeto no Visual Studio
-Executar as migrations para criar o banco de dados
-Rodar a aplicação
-Acessar o Swagger para testar os endpoints

 Front-end (Angular)

Além da API, foi desenvolvido um cliente em Angular para interagir com as tarefas em tempo real.

**Funcionalidades do Front-end:**
- Listagem dinâmica de tarefas consumindo a API.
- Formulário de cadastro de novas tarefas com atualização automática da lista.
- Funcionalidade de exclusão de tarefas.
- Integração completa utilizando HttpClient e RxJS (Observables).

**Tecnologias utilizadas no Front:**
- Angular 18
- TypeScript
- HTML/CSS (Standalone Components)

 ▶️ Como executar o Front-end
 
- Navegue até a pasta `tarefas-front`.
- Certifique-se de que a API (.NET) está rodando no endereço `http://localhost:5250`.
- No terminal da pasta, execute `npm install` para instalar as dependências.
- Execute o comando `ng serve` para iniciar o servidor de desenvolvimento.
- Acesse `http://localhost:4200` no seu navegador.


"Este projeto representa uma implementação Full Stack completa, com foco na integração entre uma API REST (.NET) e um Front-end dinâmico (Angular), garantindo o funcionamento do CRUD e a persistência de dados."



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

Este projeto representa uma implementação inicial de uma API REST, com foco em organização básica, funcionamento do CRUD e integração com banco de dados.


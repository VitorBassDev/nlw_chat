 Bibliotecas - Microfmworks
 Bibliotecas
 Express
 Uuid
 socket.io
 Módulo EJS

---
 ### Banco de Dados
  Bibliotecas: 
  npm install typeorm --save
  npm install reflect-metadata --save

 - Driver: SQLite
 npm install sqlite3 --save

---
 ## Configuração do banco de dados
  ```arquivo ormconfig.json ```
  Possui as configurações do banco, das entidades e das migrations
  Para este projeto, esse arquivo contém as configurações de criação e execução de migrations
  Mapeia as entidades da aplicação
---
 ## Migrations 
  ```arquivo src/database/migrations```
  O TypeOrm realiza a criação das migrations e as aloca na pasta de migrations

  ### Criar e implementar os campos da Migration
  npm run typeorm migration:create -n 'nome da tabela'
  ou
  yarn typeorm migration:create -n 'nome da tabela'

  ### Executar a migration
  npm run typeorm migration:run
  ou
  yarn typeorm migration:run

  #### Models Implementadas:
  settings

---
  ## Criar Entidades e Prototipar 
  ```src/entities```

  #### Entities Implementadas:
  settings

  ## Criar e Implementar Repositório 
  ```src/repositories```
  -- Estutura de uma classe responsável por manipular dados na aplicação.
  -- Responsável por fazer a comunicação entre a entidade e a tabela do banco de dados.


  ### Aprendizado
  - Usar o Socket.io
  ``` configuração do socket.io está no arquivo server.ts```
  
  - Setar configuração de arquivos do frontend
  ```configuração está no arquivo server.ts```


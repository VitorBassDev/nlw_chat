 Bibliotecas - Microfmworks
 Bibliotecas
 Express
 Uuid

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

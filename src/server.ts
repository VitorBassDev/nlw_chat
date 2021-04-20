import express from 'express'

import "./database"

const app = express()


app.get('/', (request, response) =>{
  return response.json({
    message: 'Nlw 05'
  })
})


app.post('/', (request, response) =>{
  

  return response.json({
    message: 'Usuário Salvo com Sucesso'
  })
})

app.listen(3030, () =>{
  console.log('Server is Run on PORT 3030')
})
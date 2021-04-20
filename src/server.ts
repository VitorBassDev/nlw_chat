import express, { json } from 'express'

import "./database"
import {routes} from './router'

const app = express()
app.use(express.json())

app.use(routes)


app.listen(3030, () =>{
  console.log('Server is Run on PORT 3030')
})
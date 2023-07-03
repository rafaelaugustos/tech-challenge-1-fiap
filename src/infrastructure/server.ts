import express from 'express'
import { json, urlencoded } from 'body-parser'

import clienteRoutes from './application/clienteController'
import produtoRoutes from './application/produtoController'
import pedidoRoutes from './application/pedidoController'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/clientes', clienteRoutes)
app.use('/produtos', produtoRoutes)
app.use('/pedidos', pedidoRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

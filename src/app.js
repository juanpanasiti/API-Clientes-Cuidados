//Import dependencies
import express from 'express'
import morgan from 'morgan'

//Import Routes
import indexRoutes from './routes/index.routes'
import productsRoutes from './routes/products.routes'

//inits
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use(indexRoutes)
app.use('/products', productsRoutes)


export default app
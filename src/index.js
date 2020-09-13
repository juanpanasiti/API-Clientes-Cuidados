import app from './app'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3000
const api_name = process.env.API_NAME || "API"
app.listen(port)
console.log(`${api_name}'s Server listen on port ${port}`)
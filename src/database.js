import mongoose from 'mongoose'
import dotenv from 'dotenv'
import * as logger from './libs/Logger'

dotenv.config()
const db_url = process.env.DB_URL || ""

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((db) => {
    logger.successLog("DB is connected succesfully");
})
.catch((error) => {
    logger.errorLog(error)
})
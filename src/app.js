import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.static("public"))
app.use(cookieParser())


//routes
import adminRouter from './routes/admin.route.js'


//routes decleration
app.use("api/v1/admin", adminRouter)


export {app}


import express from "express"
import router from './routes/router.js'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import connectDB from './db/connection.js'

//================Initialize Express ==============

const app = express()
const port = process.env.PORT || '30002'

//================Define __dirname ==============

const __dirname = dirname(fileURLToPath(import.meta.url));

//================Connect Mongoose Db======= ==============

connectDB('mongodb+srv://mrabaidullahshahnawaz:VXcsTm5q1NJGSmTL@productdb.678goys.mongodb.net/');

//================Allow to get Data from req===============

app.use(express.urlencoded({ extended: false }))

//================Tell what engine am using ==============

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs')

//================Use Static File ==============

app.use(express.static(join(process.cwd(), 'public')))

//================Call Routes ==============

app.use('/', router)

//================Server Running =============================

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
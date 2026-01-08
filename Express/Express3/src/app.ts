import express,{Application} from 'express'
import router from './routes/route'
const app:Application = express()
const Port:Number = 3000

app.use(express.json())

app.use('/product',router)

app.listen(Port)
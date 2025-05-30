import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
const port = process.env.PORT || 3000

const date = new Date()
const currDate = String(date.getDate()).padStart(2,'0')
const currMonth = String(date.getMonth()+1).padStart(2,'0')
const currYear = date.getFullYear()

const today = `${currYear}-${currMonth}-${currDate}`


const API_KEY = 'f8db9b44b617670099360909a043ac6a1d498be434da911a925350ce67457bdb'
const to = '2025-12-31'

const allowedOrigins = ['http://localhost:5173','https://basketball-fixtures-6fmh.vercel.app','https://basketball-fixtures-6fmh-sideprojects-fe3706d4.vercel.app','https://basketball-fixtures-6fmh-git-main-sideprojects-fe3706d4.vercel.app']

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET']
}))

app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.get('/events', async(req,res)=>{

    try {
        const response = await axios.get(`https://apiv2.allsportsapi.com/basketball/?met=Fixtures&APIkey=${API_KEY}&from=${today}&to=${to}`)
        res.json(response.data.result)
    } catch (error) {
        console.error("Error in fetching data:", error);
}
})


app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port} `)
})
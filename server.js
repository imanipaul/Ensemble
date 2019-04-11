const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const Port = process.env.PORT || 1340

app.get('/', (req,res) => {
  res.send('This is the home page of the server')
})

app.listen(Port, () => console.log(`Running on port ${Port}`))

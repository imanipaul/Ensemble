const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { User, Category, Thread, Comment } = require('./models/models.js')
const { Op } = require('sequelize')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const Port = process.env.PORT || 1340

app.get('/', (req, res) => {
  res.send('This is the home page of the server')
})


app.get('/users', async (req, res) => {
  try {
    const allUsers = await User.findAll({ raw: true })
    res.json({ allUsers })
    console.log(JSON.stringify(allUsers, null, 2))
  }
  catch (e) {
    console.log(e.message)
  }
})

app.listen(Port, () => console.log(`Running on port ${Port}`))

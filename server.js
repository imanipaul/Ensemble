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

app.get('/category', async (req, res) => {
  try {
    const allCategories = await Category.findAll({ raw: true })
    res.json({ allCategories })
  } catch (error) {
    console.log(error.message)

  }
})

app.get('/thread', async (req, res) => {
  try {
    const allThreads = await Thread.findAll({ raw: true })
    res.json(allThreads)
  } catch (error) {
    console.log(error.message)

  }
})

app.get('/comment', async (req, res) => {
  try {
    const allComments = await Comment.findAll({ raw: true })
    res.json(allComments)
  } catch (error) {
    console.log(error.message)
  }
})

app.post('/users', async (req, res) => {
  console.log(req.body)
  try {
    const user = User.create(req.body)
    res.json(user)
  } catch (error) {
    console.log(error.message)

  }
})

app.post('/category', async (req, res) => {
  console.log(req.body)
  try {
    const category = Category.create(req.body)
    res.json(category)
  } catch (error) {
    console.log(error.message)
  }
})

app.post('/thread', async (req, res) => {
  console.log(req.body)
  try {
    const thread = Thread.create(req.body)
    res.json(thread)
  } catch (error) {
    console.log(error.message)
  }
})

app.post('/comment', async (req, res) => {
  console.log(req.body)
  try {
    const comment = Comment.create(req.body)
    res.json(comment)
  } catch (error) {
    console.log(error.message)
  }
})

app.listen(Port, () => console.log(`Running on port ${Port}`))

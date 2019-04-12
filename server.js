const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const { Op } = require('sequelize')

const { User } = require('./models/models')

const { hashPassword, checkPassword, genToken } = require('./auth.js')

app.use(bodyParser.json())
app.use(cors())

const Port = process.env.PORT || 1340

app.get('/', (req, res) => {
  res.send('This is the home page of the server')
})

app.post('/login', async (req, res) => {
  let user
  const { nameOrEmail, password } = req.body
  if (nameOrEmail.search(/@/) !== -1) {
    user = await User.findOne({
      where: {
        email: {
          [Op.iLike]: nameOrEmail
        }
      }
    })
  } else {
    user = await User.findOne({
      where: {
        name: {
          [Op.iLike]: nameOrEmail
        }
      }
    })
  }
  if (user) {
    const isUser = await checkPassword(password, user.password_digest)
    if (isUser) {
      const token = genToken(user)
      res.json({
        token,
        user,
        message: 'Logged in!'
      })
    } else {
      res.json({
        message: 'Incorrect password'
      })
    }
  } else {
    res.json({
      message: 'Incorrect name or email'
    })
  }
})

app.post('/signup', async (req, res) => {
  const { email, password, name } = req.body
  const passwordDigest = await hashPassword(password)
  const user = User.create({
    name,
    email,
    password_digest: passwordDigest
  })
  console.log(user)
  const token = genToken(user)
  res.json({
    token,
    user,
    message: 'User successfully created'
  })
})

app.listen(Port, () => console.log(`Running on port ${Port}`))

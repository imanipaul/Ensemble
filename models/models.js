const Sequelize = require('sequelize');


// connect to database

const db = new Sequelize({
  database: 'users_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: { 
    underscored: true
  }
});

// define building model

const User = db.define('user', {
  name: {
    type: Sequelize.VARCHAR
  },
  email: {
    type: Sequelize.VARCHAR,
    unique: true
  },
  password_digest: {
    type: Sequelize.STRING
  },
  token: {
    type: Sequelize.INTEGER
  }
});

// define category model

const Category = db.define('category', {
  name: {
    type: Sequelize.VARCHAR
  },
  content: {
    type: Sequelize.STRING
  },
})

// define thread model

const Thread = db.define('thread', {
  title: {
    type: Sequelize.STRING
  }
})

// define thread model

const Comment = db.define('comment', {
    title: {
      type: Sequelize.STRING
    }
  })

// associations


User.hasMany(Thread, { onDelete: 'cascade' })
User.hasMany(Comment, { onDelete: 'cascade' })
Thread.belongsTo(Category)
Thread.belongsTo(User)
Comment.belongsTo(User)


// export models

module.exports = {
  db,
  User,
  Category,
  Thread,
  Comment
}

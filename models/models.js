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

// define user model

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.VARCHAR,
    unique: true
  },
  password_digest: {
    type: Sequelize.STRING,
    unique: true
  }
});

// define category model

const Category = db.define('category', {
  name: {
    type: Sequelize.VARCHAR
  },
  
})

// define thread model

const Thread = db.define('thread', {
  title: {
    type: Sequelize.VARCHAR
  },
  content: {
    type: Sequelize.TEXT
  }
})

// define comment model

const Comment = db.define('comment', {
    content: {
      type: Sequelize.TEXT
    }
  })

// associations


User.hasMany(Thread, { onDelete: 'cascade' });
User.hasMany(Comment, { onDelete: 'cascade' });
Thread.hasMany(Comment);
Category.hasMany(Thread);
Thread.belongsTo(Category);
Thread.belongsTo(User);
Comment.belongsTo(User);
Comment.belongsTo(Thread);


// export models

module.exports = {
  db,
  User,
  Category,
  Thread,
  Comment
}

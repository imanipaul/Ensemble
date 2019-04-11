const { users, categories, thread, comments } = require('./models')

const main = async () => {
    
    

    // Create users
    await users.create({
        id: 1,
        name: 'Imani Paul',
        email: 'imani@email.com',
        role: 'student',
        password_digest: 'password',        
    })

    await users.create({
        id: 2,
        name: 'Alane Reyes',
        email: 'alane@email.com',
        role: 'student',
        password_digest: 'password',        
    })

    await users.create({
        id: 3,
        name: 'Soren Soroush',
        email: 'soren@email.com',
        role: 'student',
        password_digest: 'password',        
    })

    await users.create({
        id: 4,
        name: 'Solito Reyes',
        email: 'solitonyc@gmail.com',
        role: 'student',
        password_digest: 'password',        
    })

    // Create categories
    await categories.create({
        id: '1',
        name: 'homework',        
    })

    await categories.create({
        id: '2',
        name: 'projects',        
    })

    await categories.create({
        id: '3',
        name: 'lesson',        
    })

    await categories.create({
        id: '4',
        name: 'services',        
    })

    await categories.create({
        id: '5',
        name: 'food',        
    })

    await categories.create({
        id: '6',
        name: 'student_life',        
    })

    //Create thread
    await thread.create({
        id: 1,        
        category_id: 6,
        user_id: 4,
        title: 'Game Night Needs More Games!',
        content: 'For those attending Friday, please bring a fresh new game for us to try?',
    })

    //Create comments
    await comments.create({
        id: 1,
        thread_id: 1,
        content: 'TEST COMMENT',
        user_id: 3,
    })
}

main()
// process.exit()
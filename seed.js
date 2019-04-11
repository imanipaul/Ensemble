const { users, categories, thread, comments } = require('./models/models')

const main = async () => {
    
    // Delete database
    await users.destroy({
        where: {}
    });
    await categories.destroy({
        where: {}
    });
    await thread.destroy({
        where: {}
    });
    await comments.destroy({
        where: {}
    });


    // Create users
    const imani = await users.create({
        name: 'Imani Paul',
        email: 'imani@email.com',
        role: 'student',
        password_digest: 'password'        
    });

    const alane = await users.create({
        name: 'Alane Reyes',
        email: 'alane@email.com',
        role: 'student',
        password_digest: 'password'        
    });

    const soren = await users.create({
        name: 'Soren Soroush',
        email: 'soren@email.com',
        role: 'student',
        password_digest: 'password'       
    });

    const solito = await users.create({
        name: 'Solito Reyes',
        email: 'solitonyc@gmail.com',
        role: 'student',
        password_digest: 'password'       
    });

    const biff = await users.create({
        name: 'Biff Gangleyman',
        email: 'biff@email.com',
        role: 'student',
        password_digest: 'password'       
    });

    const gladys = await users.create({
        name: 'Gladys Cornfoot',
        email: 'gladys@email.com',
        role: 'teacher',
        password_digest: 'password'       
    });

    const bertha = await users.create({
        name: 'Bertha Clutterbuck',
        email: 'bertha@email.com',
        role: 'teacher',
        password_digest: 'password'       
    });

    const winston = await users.create({
        name: 'Winston McFly',
        email: 'winston@email.com',
        role: 'alumni',
        password_digest: 'password'
    })

    const nora = await users.create({
        name: 'Nora Boneleak',
        email: 'nora@email.com',
        role: 'alumni',
        password_digest: 'password'
    })


    // Create categories
    const homework = await categories.create({
        name: 'homework',        
    });

    const projects = await categories.create({
        name: 'projects',        
    });

    const lesson = await categories.create({
        name: 'lesson',        
    });

    const services = await categories.create({
        name: 'services',        
    });

    const food = await categories.create({
        name: 'food',        
    });

    const student_life = await categories.create({
        name: 'student_life',        
    });

    // Create thread
    const gameNightThread = await thread.create({ 
        title: 'Game Night Needs More Games!',
        content: 'For those attending Friday, please bring a fresh new game for us to try?',
    });

    const macBookThread = await thread.create({      
        title: 'Macbook pro for sale!',
        content: 'Hey there, Im selling my 2015 macBook pro, not a single scratch. Please contact front lines for more details.',
    });

    const reactTutoring = await thread.create({      
        title: 'Anybody Need React Tutoring?',
        content: 'Im willing to barter some tutoring time for some UX and Front End work on a personal project!',
    });

    const marvelApi = await thread.create({
        title: 'Ignore private key with Marvel API',
        content: 'You will receive public and private key from Marvel. Ignore the private key, unless you are creating a server-side app. It is totally useless.',
    })

    const fridayComment = await thread.create({
        title: 'Smile! Friday is Coming!',
        content: 'Friday is coming, we are free. I am so tired right now. Please no homework for today',
    })

    const digInn = await thread.create({
        title: 'Check out the Digg Inn',
        content: 'I was impressed with how fresh the food was at the Dig Inn on 23rd and Madison. Not cheap, but not expensive either. Decent value. There are a bunch around the city.',
    })

    const gitLabs = await thread.create({
        title: 'Git Labs Homework Tip',
        content: 'Take your time, and carefully read the instructions for each problem. If you make a mistake, Git will not inform you anything is wrong, and you will just hang without any alert. So be careful. You could try to open two browser sessions.',
    })



    // Create comments
    const macComment = await comments.create({
        content: 'TEST COMMENT',
    });

    // Associations
    await macBookThread.setUser(alane);
    await gameNightThread.setUser(solito);
    await reactTutoring.setUser(biff);
    await marvelApi.setUser(solito);
    await fridayComment.setUser(gladys);
    await digInn.setUser(biff);
    await gitLabs.setUser(nora);

    await macBookThread.setCategory(services);
    await gameNightThread.setCategory(student);
    await reactTutoring.setCategory(services);
    await marvelApi.setCategory(projects);
    await fridayComment.setCategory(student);
    await digInn.setCategory(food);
    await gitLabs.setCategory(homework);

    await macBookThread.setComment(macComment);

   

}

main()
// process.exit()
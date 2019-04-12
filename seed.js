const { User, Category, Thread, Comment } = require('./models/models')


const main = async () => {

    // Delete database
    await User.destroy({
        where: {}
    });
    await Category.destroy({
        where: {}
    });
    await Thread.destroy({
        where: {}
    });
    await Comment.destroy({
        where: {}
    });


    // Create users
    const imani = await User.create({
        name: 'Imani Paul',
        email: 'imani@email.com',
        role: 'student',
        password_digest: 'password'
    });

    const alane = await User.create({
        name: 'Alane Reyes',
        email: 'alane@email.com',
        role: 'student',
        password_digest: 'password'
    });

    const soren = await User.create({
        name: 'Soren Soroush',
        email: 'soren@email.com',
        role: 'student',
        password_digest: 'password'
    });

    const solito = await User.create({
        name: 'Solito Reyes',
        email: 'solitonyc@gmail.com',
        role: 'student',
        password_digest: 'password'
    });

    const biff = await User.create({
        name: 'Biff Gangleyman',
        email: 'biff@email.com',
        role: 'student',
        password_digest: 'password'
    });

    const gladys = await User.create({
        name: 'Gladys Cornfoot',
        email: 'gladys@email.com',
        role: 'teacher',
        password_digest: 'password'
    });

    const bertha = await User.create({
        name: 'Bertha Clutterbuck',
        email: 'bertha@email.com',
        role: 'teacher',
        password_digest: 'password'
    });

    const winston = await User.create({
        name: 'Winston McFly',
        email: 'winston@email.com',
        role: 'alumni',
        password_digest: 'password'
    })

    const nora = await User.create({
        name: 'Nora Boneleak',
        email: 'nora@email.com',
        role: 'alumni',
        password_digest: 'password'
    })

    const leila = await User.create({
        name: 'Leila Ndong',
        email: 'nana@email.com',
        role: 'teacher',
        password_digest: 'password'
    })

    const aminata = await User.create({
        name: 'Aminata Ndiaye',
        email: 'ndiaye@email.com',
        role: 'teacher',
        password_digest: 'password'
    })

    // Create Category
    const homework = await Category.create({
        name: 'homework',
    });

    const projects = await Category.create({
        name: 'projects',
    });

    const lesson = await Category.create({
        name: 'lesson',
    });

    const services = await Category.create({
        name: 'services',
    });

    const food = await Category.create({
        name: 'food',
    });

    const student_life = await Category.create({
        name: 'student_life',
    });

    // Create Thread
    const gameNightThread = await Thread.create({
        title: 'Game Night Needs More Games!',
        content: 'For those attending Friday, please bring a fresh new game for us to try?',
    });

    const macBookThread = await Thread.create({
        title: 'Macbook pro for sale!',
        content: 'Hey there, Im selling my 2015 macBook pro, not a single scratch. Please contact front lines for more details.',
    });

    const reactTutoring = await Thread.create({
        title: 'Anybody Need React Tutoring?',
        content: 'Im willing to barter some tutoring time for some UX and Front End work on a personal project!',
    });

    const marvelApi = await Thread.create({
        title: 'Ignore private key with Marvel API',
        content: 'You will receive public and private key from Marvel. Ignore the private key, unless you are creating a server-side app. It is totally useless.',
    })

    const fridayComment = await Thread.create({
        title: 'Smile! Friday is Coming!',
        content: 'Friday is coming, we are free. I am so tired right now. Please no homework for today',
    })

    const digInn = await Thread.create({
        title: 'Check out the Digg Inn',
        content: 'I was impressed with how fresh the food was at the Dig Inn on 23rd and Madison. Not cheap, but not expensive either. Decent value. There are a bunch around the city.',
    })

    const gitLabs = await Thread.create({
        title: 'Git Labs Homework Tip',
        content: 'Take your time, and carefully read the instructions for each problem. If you make a mistake, Git will not inform you anything is wrong, and you will just hang without any alert. So be careful. You could try to open two browser sessions.',
    })

    const sleep = await Thread.create({
        title: 'Sleep!!',
        content: 'Avoid sleepless nights and take breaks!',
    })

    const lunch = await Thread.create({
        title: 'Bring lunch from home',
        content: 'Restaurants in the area are great but tend to be expensive, bring lunch from Home!',
    })

    // const sleep = await Thread.create({
    //     title: 'Sleep!!',
    //     content: 'Avoid sleepless nights and take breaks!',
    // })



    // Create Comment
    const macComment = await Comment.create({
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
    await sleep.setUser(leila);
    await lunch.setUser(Aminata);

    await macBookThread.setCategory(services);
    await gameNightThread.setCategory(student_life);
    await reactTutoring.setCategory(services);
    await marvelApi.setCategory(projects);
    await fridayComment.setCategory(student_life);
    await digInn.setCategory(food);
    await gitLabs.setCategory(homework);
    await sleep.setCategory(student_life);
    await lunch.setCategory(food);

    await macComment.setThread(macBookThread);



}

main()
// process.exit()
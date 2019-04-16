# Ensemble 
### A digital meeting place for GA students, alumni, and instructors
### [Click here](http://ensemble-ga.surge.sh/ 'Ensemble GA homepage') to check it out!

### Description

Ensemble is an app that will allow members from the GA family to interact with each other, whether they are students, alumnis or staff members. Members can create threads within six categories, namely, Homework, Projects, Lesson, Services, Food and Student Life and also make comments on any thread.


### Installation

First, drop the database (if already created) with `npm run db:drop` and then create and seed the database with `npm run db:create`

Then install dependencies using `npm install`

Finally, run both the server and client concurrently using `npm run dev`


### Technologies used :
- React
- React Router
- Express
- Heroku 
- Sequelize
- Postgres
- Surge
- Bcrypt
- Json Web Token
- JWT Decode
- Web Font Loader

## User stories

As a GA student I would like to ____ so that I can ______.

* Ask questions...get educated answers

* Offer advice...help other students

* View posts...read information

* Filter posts...read specific information

* Log in...create posts


As an instructor/alumni I would like to ____ so that I can _____.

* Answer questions...help students learn.

* Offer advice...help students learn.

* Log in...create posts.


## ERD DIAGRAM:
![ERD](/erd.png)

## WIRE FRAMES:
### Landing
![Landing](/wireframes/wf-01-landing.png)

### Logged In View
![Logged In](/wireframes/wf-02-logged-in.png)

### Single Post Thread
![Thread](/wireframes/wf-03-thread.png)

### Category Posts List
![List of Posts](/wireframes/wf-04-list-of-posts.png)

### My Posts & Profile
![My Posts](/wireframes/wf-05-my-posts-profile.png)

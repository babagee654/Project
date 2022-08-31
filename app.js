const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate');
const Question = require('./model/question');

const dbUrl = 'mongodb://localhost:27017/RPGMaker';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected.");
})



app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))


const questionsData = require('./public/js/questionsData');

app.post('/add', async (req, res) => {
    // console.log(questionsData);
    await Question.deleteMany();
    for (let i = 0; i < questionsData.length; i++) {
        questionsData[i].save()
            .then(res => console.log("It worked!\n", res))
            .catch(err => console.log("It failed!\n", err.errors.name.properties.message))
    }
    res.redirect('/');
})

/**
 * To compare the class values
 * 
 * Server--side
 * Score for each answer?
 * 
 * for Question 1a)
 * Race: {},
 * Score: {
 *      warrior: 1
 *      ranger: 1
 *      bard: 0
 *      mage: 0
 * },
 * Trait: {}
 * 
 * 
 * Client--side: Keeping track of current character score
 * 
 * // Comes from the server
 * const data = fetch(urlToGetData) ---- would return data
 * // data.score.warrior =1        data.score.ranger = 1
 * 
 * // Comes from the server
 * let dataKeysArray = data.score.keys // [warrior, ranger, bard, mage]
 * 
 * 
 * // The client/browser keeps track of their score.
 * let currClassScore = [{class: warrior, count: 1}, {class: ranger, count: 1}, {class: bard, count: 1}, {class: mage, count: 1}]
 * 
 * 
 * // Access each key in data.score, and add the value to our score tracker
 * for (i in dataKeysArray){
 *      
 *     let keyName = dataKeysArray[i] // "warrior"
 * 
 *     let currDataValue = data.score[keyName]  // 1
 * 
 *     let currClass = currClassScore[i]              // {class:warrior, count: 1}
 * 
 *     currClass.count += currDataValue
 *  
 * }
 * 
 * 
 *  -- AFTER ALL QUESTIONS ARE DONE -- We use the results of the saved browser score to save their character.
 * 
 * // Find the class with the Highest Score
 * 
 * let currClassScore = [{class: warrior, count: 5}, {class: ranger, count: 2}, {class: bard, count: 0}, {class: mage, count: 6}]
 * 
 * let highestClassScore = currClassScore.reduce((prev, curr) => {
 *      	if (prev.count > curr.count){
                return prev
            }
            return curr
 * })
 *  Use as character creation data
 * 
 */

/**
 * Find question
 * 
 * Find nextQuestion
 * 
 * Create relationship between question and nextQuestion
 * 2.a.next === 2a
 *  2.b.next === 2b
 * 
 * 
 */

app.get('/relate', async (req, res) => {
    let currQuestion = await Question.find({ name: "2" });
    let nextQuestion = await Question.find({ name: "2a" });

    console.log(currQuestion[0].a)
    console.log(nextQuestion[0]._id)

    let updateQuestion = await Question.updateOne({ _id: currQuestion[0]._id }, { $set: { a: { answer: 'Fight it', next: nextQuestion[0]._id } } })
        .then(
            res => console.log(res),
            err => console.error(err)
        )
    res.send("Relating")
})

app.get('/quiz', async (req, res) => {
    console.log("SHOWING QUIZ");

    let data = await Question.find({})
        .populate('a.next')
        ;
    // console.log(data)
    res.render("quiz.ejs", { data });
})

app.get('/login', (req, res) => {
    console.log("SHOWING REGISTER");
    res.render("login.ejs");
})

app.get('/user/:id/saves'), (req, res) => {
    console.log("SHOWING HOME");
    res.render("saves.ejs");
}

app.get('/', (req, res) => {
    console.log("SHOWING HOME");
    res.render("home.ejs");
})



app.listen(3000, () => {
    console.log('Listening on port 3000');
});

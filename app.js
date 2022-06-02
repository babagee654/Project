const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))

// DATA
const data = {
    //id
    q1: {
        question: 'choose a race',
        a: { value: 'human', next: {} },
        b: { value: 'elf', next: {} },
        c: { value: 'orc', next: {} },
        d: { value: 'dwarf', next: {} },
    },
    q2: {
        question: 'When confronted by a giant owlbear your first instinct is to',
        a: {
            value: 'Fight it',
            next: {
                question: 'When fighting you prefer to',
                a: { value: 'get up close and persona', next: {} },
                b: { value: 'sneak up', next: {} },
                c: { value: 'stay far away and shoot from a distance ', next: {} },
                d: { value: 'cast magic', next: {} },
            }
        },
        b: {
            value: 'Run away',
            next: {
                question: 'Where would you run to?',
                a: { value: 'run and never stop', next: {} },
                b: { value: 'run and find a hiding spot to set up a trap', next: {} },
                c: { value: 'to my party members cause they are so much stronger', next: {} },
                d: { value: 'run into the local village and prepare them for battle', next: {} },
            }
        },
        c: {
            value: 'Try to understand the situation',
            next: {
                question: 'As you observe, the owlbear seems to be injured, what is your next move?',
                a: { value: 'It’s an easy kill, go and attack.', next: {} },
                b: { value: 'carefully show yourself to the owlbear, and try to heal it.', next: {} },
                c: { value: 'ignore it and wait for it to pass.', next: {} },
                d: { value: 'Now’s your chance, channel a spell.', next: {} },
            }
        },
        d: {
            value: 'Give it a treat',
            next: {
                question: 'The owlbear is suspicious of you and lets out a loud roar, what is your next move?',
                a: { value: 'leave the treat on the ground and slowly back away.', next: {} },
                b: { value: "shove the treat down the owlbear's throat.", next: {} },
                c: { value: 'quickly cast a spell to calm the owlbear.', next: {} },
                d: { value: "display your dominance by imitating the owlbear's roar but louder.", next: {} },
            }
        },
    },
    // q3: {
    //     question: 'You enter a town looking for a quest, where do you go first?',
    //     a: 'The local inn',
    //     b: 'The town square',
    //     c: ' The mysterious cabin in the outskirts of town',
    //     d: 'The market, you got some things to do first',
    //     next: {
    //         q3a: {
    //             question:
    //                 'At the inn you find an innkeeper, a grumpy mercenary, and a shady hooded figure. What is your next action?',
    //             a: 'Seduce the innkeeper',
    //             b: 'Attempt to intimidate the mercenary',
    //             c: 'Cast magic to detect the thoughts of the hooded figure',
    //             d: 'Offer gold to the innkeeper for some info about the people at the inn',
    //         },
    //         q3b: {
    //             question:
    //                 ' At the town square, there is a crowd of people surrounding a caravan. What is your next move?',
    //             a: 'Use your knowledge of the town’s history to figure out what is happening',
    //             b: 'Lie to the caravan guard and say you’re part of it and need to get back on',
    //             c: 'Play your instrument because you are so good at playing it',
    //             d: 'Cast a spell to disperse the crowd and see why they are gathered',
    //         },
    //         q3c: {
    //             question:
    //                 'You arrive at the cabin but there seems to be no one answering the door. What do you do?',
    //             a: 'Break down the door',
    //             b: 'Climb onto a tree and try to look inside cabin',
    //             c: 'Cast a spell to teleport somewhere inside',
    //             d: 'Channel a spell to try and communicate with the supernatural',
    //         },
    //         q3d: {
    //             question:
    //                 'At the market there is a magician selling scrolls, a throat singer singing ballads, and a blacksmith forging weapons, who do you approach?',
    //             a: 'The magician, you want to learn some spells',
    //             b: 'The blacksmith, you want a new weapon',
    //             c: 'The throat singer, you want to improve your performance skills',
    //             d: 'Sell some of your wares to a general store cause you’re poor.',
    //         },
    //     }
    // },
};



app.get('/quiz', (req, res) => {
    console.log("SHOWING QUIZ");
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

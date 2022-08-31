const Question = require("../../model/question");
const Score = require("../../model/score");

let q1 = new Question({
    name: "1",
    question: 'choose a race',
    a: { answer: 'human' },
    b: { answer: 'elf' },
    c: { answer: 'orc' },
    d: { answer: 'dwarf' },
})




let q2 = new Question({
    name: "2",
    question: 'When confronted by a giant owlbear your first instinct is to',
    a: {
        answer: 'Fight it',
    },
    b: {
        answer: 'Run away',
    },
    c: {
        answer: 'Try to understand the situation',

    },
    d: {
        answer: 'Give it a treat',

    },
})

let q2a = new Question({
    name: "2a",
    question: 'When fighting you prefer to',
    a: { answer: 'get up close and persona' },
    b: { answer: 'sneak up' },
    c: { answer: 'stay far away and shoot from a distance ' },
    d: { answer: 'cast magic' },
})


let q2b = new Question({
    name: "2b",
    question: 'Where would you run to?',
    a: { answer: 'run and never stop' },
    b: { answer: 'run and find a hiding spot to set up a trap' },
    c: { answer: 'to my party members cause they are so much stronger' },
    d: { answer: 'run into the local village and prepare them for battle' },
})

let q2c = new Question({
    name: "2c",
    question: 'As you observe, the owlbear seems to be injured, what is your next move?',
    a: { answer: 'It’s an easy kill, go and attack.' },
    b: { answer: 'carefully show yourself to the owlbear, and try to heal it.' },
    c: { answer: 'ignore it and wait for it to pass.' },
    d: { answer: 'Now’s your chance, channel a spell.' },
})

let q2d = new Question({
    name: "2d",
    question: 'The owlbear is suspicious of you and lets out a loud roar, what is your next move?',
    a: { answer: 'leave the treat on the ground and slowly back away.' },
    b: { answer: "shove the treat down the owlbear's throat." },
    c: { answer: 'quickly cast a spell to calm the owlbear.' },
    d: { answer: "display your dominance by imitating the owlbear's roar but louder." },
})

let questionsData = [q1, q2, q2a, q2b, q2c, q2d]

module.exports = questionsData;


// const data = {
//     //id
//     q2: {
//         question: 'When confronted by a giant owlbear your first instinct is to',
//         a: {
//             value: 'Fight it',
//             next: {
//                 question: 'When fighting you prefer to',
//                 a: { value: 'get up close and persona', next: {} },
//                 b: { value: 'sneak up', next: {} },
//                 c: { value: 'stay far away and shoot from a distance ', next: {} },
//                 d: { value: 'cast magic', next: {} },
//             }
//         },
//         b: {
//             value: 'Run away',
//             next: {
//                 question: 'Where would you run to?',
//                 a: { value: 'run and never stop', next: {} },
//                 b: { value: 'run and find a hiding spot to set up a trap', next: {} },
//                 c: { value: 'to my party members cause they are so much stronger', next: {} },
//                 d: { value: 'run into the local village and prepare them for battle', next: {} },
//             }
//         },
//         c: {
//             value: 'Try to understand the situation',
//             next: {
//                 question: 'As you observe, the owlbear seems to be injured, what is your next move?',
//                 a: { value: 'It’s an easy kill, go and attack.', next: {} },
//                 b: { value: 'carefully show yourself to the owlbear, and try to heal it.', next: {} },
//                 c: { value: 'ignore it and wait for it to pass.', next: {} },
//                 d: { value: 'Now’s your chance, channel a spell.', next: {} },
//             }
//         },
//         d: {
//             value: 'Give it a treat',
//             next: {
//                 question: 'The owlbear is suspicious of you and lets out a loud roar, what is your next move?',
//                 a: { value: 'leave the treat on the ground and slowly back away.', next: {} },
//                 b: { value: "shove the treat down the owlbear's throat.", next: {} },
//                 c: { value: 'quickly cast a spell to calm the owlbear.', next: {} },
//                 d: { value: "display your dominance by imitating the owlbear's roar but louder.", next: {} },
//             }
//         },
//     },
//     // q3: {
//     //     question: 'You enter a town looking for a quest, where do you go first?',
//     //     a: 'The local inn',
//     //     b: 'The town square',
//     //     c: ' The mysterious cabin in the outskirts of town',
//     //     d: 'The market, you got some things to do first',
//     //     next: {
//     //         q3a: {
//     //             question:
//     //                 'At the inn you find an innkeeper, a grumpy mercenary, and a shady hooded figure. What is your next action?',
//     //             a: 'Seduce the innkeeper',
//     //             b: 'Attempt to intimidate the mercenary',
//     //             c: 'Cast magic to detect the thoughts of the hooded figure',
//     //             d: 'Offer gold to the innkeeper for some info about the people at the inn',
//     //         },
//     //         q3b: {
//     //             question:
//     //                 ' At the town square, there is a crowd of people surrounding a caravan. What is your next move?',
//     //             a: 'Use your knowledge of the town’s history to figure out what is happening',
//     //             b: 'Lie to the caravan guard and say you’re part of it and need to get back on',
//     //             c: 'Play your instrument because you are so good at playing it',
//     //             d: 'Cast a spell to disperse the crowd and see why they are gathered',
//     //         },
//     //         q3c: {
//     //             question:
//     //                 'You arrive at the cabin but there seems to be no one answering the door. What do you do?',
//     //             a: 'Break down the door',
//     //             b: 'Climb onto a tree and try to look inside cabin',
//     //             c: 'Cast a spell to teleport somewhere inside',
//     //             d: 'Channel a spell to try and communicate with the supernatural',
//     //         },
//     //         q3d: {
//     //             question:
//     //                 'At the market there is a magician selling scrolls, a throat singer singing ballads, and a blacksmith forging weapons, who do you approach?',
//     //             a: 'The magician, you want to learn some spells',
//     //             b: 'The blacksmith, you want a new weapon',
//     //             c: 'The throat singer, you want to improve your performance skills',
//     //             d: 'Sell some of your wares to a general store cause you’re poor.',
//     //         },
//     //     }
//     // },
// };
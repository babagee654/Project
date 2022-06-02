//example data, will be pulled thru database later?
//datasets should include an unique id, the question and the choices of answers
const data = {
    //id
    q1: {
        question:"choose a race",
        a:"human",
        b: "elf",
        c: "orc",
        d: "dwarf"    
    },
    q2: {
        question:"When confronted by a giant owlbear your first instinct is to",
        a: "Fight it",
        b: "Run away",
        c: "Try to understand the situation",
        d: "Give it a treat"    
    },
    q2a: {
        question:"when fighting you prefer to",
        a:"get up close and persona",
        b: "sneak up",
        c: "stay far away and shoot from a distance ",
        d: "cast magic"    
    },
    q2b: {
        question:"where would you run to?",
        a:"run and never stop",
        b: "run and find a hiding spot to set up a trap",
        c: "to my party members cause they are so much stronger",
        d: "run into the local village and prepare them for battle"    
    },
    q2c: {
        question:"where would you run to?",
        a:"run and never stop",
        b: "run and find a hiding spot to set up a trap",
        c: "to my party members cause they are so much stronger",
        d: "run into the local village and prepare them for battle"    
    },
    q2d: {
        question:"The owlbear is suspicious of you and lets out a loud roar, what is your next move?",
        a: "leave the treat on the ground and slowly back away",
        b: "shove the treat down the owlbear's throat",
        c: "quickly cast a spell to calm the owlbear",
        d: "display your dominance by imitating the owlbear's roar but louder"    
    },
    q3: {
        question:"You enter a town looking for a quest, where do you go first?",
        a: "The local inn"      ,
        b: "The town square",
        c: " The mysterious cabin in the outskirts of town",
        d: "The market, you got some things to do first",  
    },
    q3a: {
        question:"At the inn you find an innkeeper, a grumpy mercenary, and a shady hooded figure. What is your next action?",
        a: "Seduce the innkeeper",
        b: "Attempt to intimidate the mercenary",
        c: "Cast magic to detect the thoughts of the hooded figure",
        d: "Offer gold to the innkeeper for some info about the people at the inn", 
    }
    
}

const rpgRace = (() => {
    const selectedRace;
    const setRace = (value) => {}
    const removeRace = () => {}

    return {
        checkRace,
        setRace,
        removeRace
    }
})()







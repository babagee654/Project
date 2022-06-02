//example data, will be pulled thru database later?
//datasets should include an unique id, the question and the choices of answers
const data = {
  //id
  q1: {
    question: 'choose a race',
    a: 'human',
    b: 'elf',
    c: 'orc',
    d: 'dwarf',
  },
  q2: {
    question: 'When confronted by a giant owlbear your first instinct is to',
    a: 'Fight it',
    b: 'Run away',
    c: 'Try to understand the situation',
    d: 'Give it a treat',
  },
  q2a: {
    question: 'when fighting you prefer to',
    a: 'get up close and persona',
    b: 'sneak up',
    c: 'stay far away and shoot from a distance ',
    d: 'cast magic',
  },
  q2b: {
    question: 'where would you run to?',
    a: 'run and never stop',
    b: 'run and find a hiding spot to set up a trap',
    c: 'to my party members cause they are so much stronger',
    d: 'run into the local village and prepare them for battle',
  },
  q2c: {
    question: 'where would you run to?',
    a: 'run and never stop',
    b: 'run and find a hiding spot to set up a trap',
    c: 'to my party members cause they are so much stronger',
    d: 'run into the local village and prepare them for battle',
  },
  q2d: {
    question:
      'The owlbear is suspicious of you and lets out a loud roar, what is your next move?',
    a: 'leave the treat on the ground and slowly back away',
    b: "shove the treat down the owlbear's throat",
    c: 'quickly cast a spell to calm the owlbear',
    d: "display your dominance by imitating the owlbear's roar but louder",
  },
  q3: {
    question: 'You enter a town looking for a quest, where do you go first?',
    a: 'The local inn',
    b: 'The town square',
    c: ' The mysterious cabin in the outskirts of town',
    d: 'The market, you got some things to do first',
  },
  q3a: {
    question:
      'At the inn you find an innkeeper, a grumpy mercenary, and a shady hooded figure. What is your next action?',
    a: 'Seduce the innkeeper',
    b: 'Attempt to intimidate the mercenary',
    c: 'Cast magic to detect the thoughts of the hooded figure',
    d: 'Offer gold to the innkeeper for some info about the people at the inn',
  },
  q3b: {
    question:
      ' At the town square, there is a crowd of people surrounding a caravan. What is your next move?',
    a: 'Use your knowledge of the town’s history to figure out what is happening',
    b: 'Lie to the caravan guard and say you’re part of it and need to get back on',
    c: 'Play your instrument because you are so good at playing it',
    d: 'Cast a spell to disperse the crowd and see why they are gathered',
  },
  q3c: {
    question:
      'You arrive at the cabin but there seems to be no one answering the door. What do you do?',
    a: 'Break down the door',
    b: 'Climb onto a tree and try to look inside cabin',
    c: 'Cast a spell to teleport somewhere inside',
    d: 'Channel a spell to try and communicate with the supernatural',
  },
  q3d: {
    question:
      'At the market there is a magician selling scrolls, a throat singer singing ballads, and a blacksmith forging weapons, who do you approach?',
    a: 'The magician, you want to learn some spells',
    b: 'The blacksmith, you want a new weapon',
    c: 'The throat singer, you want to improve your performance skills',
    d: 'Sell some of your wares to a general store cause you’re poor.',
  },
};

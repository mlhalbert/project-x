/*************************************************
* 
* The purpose of this file is to seed your database 
* with starter data relevant to you spplication.
*
**************************************************/




const sequelize = require('../config/connection');
// This is an example, change this
const { Bootcamp } = require('../models');

// This is an example, change this. This json file does not exist yet.
// const data = require('../db/seeds.sql');

const data = [
  "We're all lazy developers",
'You\'re not gonna need this',
'What does clean code mean to you?',
'Mark and Marc duo',
'Eli you\'re on mute',
'Let\'s get cracking',
'“So who wants to share their screen” *cue silence*',
'Johnny + his fun backgrounds',
'Cabral casually being an encyclopedia for specific facts',
'Carlee cat sighting',
'More than 10 people have their cameras off',
'Unstable internet',
'*Fiddles around trying to leave meeting*'
]

// This is an example, change this
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await Bootcamp.bulkCreate(data, {
  //   individualHooks: true,
  //   returning: true,
  // });

  for (let i = 0; i < data.length; i++) {
    await Bootcamp.create({ description: data[i] })
    
  }

  process.exit(0);
};

seedDatabase();

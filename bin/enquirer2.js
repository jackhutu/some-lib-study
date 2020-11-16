#!/usr/bin/env node

// const colors = require('ansi-colors');
// const { prompt } = require('enquirer');

// (async() => {

//   const answers = await prompt({
//     type: 'autocomplete',
//     name: 'flavor',
//     message: 'Pick your favorite flavor',
//     styles: { primary: colors.blue },
//     choices: [
//       'almond',
//       'apple',
//       'banana',
//       'cherry',
//       'chocolate',
//       'cinnamon',
//       'coconut',
//       'cotton candy',
//       'grape',
//       'nougat',
//       'orange',
//       'pear',
//       'pineapple',
//       'strawberry',
//       'vanilla',
//       'watermelon',
//       'wintergreen'
//     ]
//   });

//   console.log(answers);

// })().catch(console.log);

// const { Survey } = require('enquirer');

// const prompt = new Survey({
//   name: 'experience',
//   message: 'Please rate your experience',
//   choices: [
//     {
//       name: 'interface',
//       message: 'The website has a friendly interface.'
//     },
//     {
//       name: 'navigation',
//       message: 'The website is easy to navigate.'
//     },
//     {
//       name: 'images',
//       message: 'The website usually has good images.'
//     },
//     {
//       name: 'upload',
//       message: 'The website makes it easy to upload images.'
//     },
//     {
//       name: 'colors',
//       message: 'The website has a pleasing color palette.'
//     }
//   ]
// });

// prompt.run()
//   .then(value => console.log('ANSWERS:', value))
//   .catch(console.error);

const { Select, prompt } = require('enquirer');

// const prompt = new Select({
//   name: 'color',
//   message: 'Pick a color',
//   format() {
//     return prompt.style(prompt.focused.name);
//   },
//   choices: [
//     {name: 'aqua', value: '#ff00ff'},
//     {name: 'black', value: '#ffff00'},

//   ]
// });

// const { prompt } = require('enquirer');
(async ()=>{
  const questions = [{
    type: 'select',
    name: 'color',
    message: 'Favorite color?',
    initial: 1,
    choices: [
      { name: 'red',   message: '选择Red',   value: '#ff0000' }, //<= choice object
      { name: 'green', message: '选择Green', value: '#00ff00' }, //<= choice object
      { name: 'blue',  message: '选择Blue',  value: '#0000ff' }  //<= choice object
    ]
  },{
    type: 'select',
    name: 'color2',
    message: 'Favorite color2?',
    initial: 2,
    choices: [
      { name: 'red2',   message: '选择Red',   value: '#ff0000' }, //<= choice object
      { name: 'green2', message: '选择Green', value: '#00ff00' }, //<= choice object
      { name: 'blue2',  message: '选择Blue',  value: '#0000ff' }  //<= choice object
    ]
  }];
  
  let answers = await prompt(questions);
  console.log('Answer:', answers);
  
  // prompt.run()
  //   .then(answer => console.log('Answer:', answer))
  //   .catch(console.error);
})()


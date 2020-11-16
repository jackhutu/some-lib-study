#!/usr/bin/env node

const { BasicAuth, prompt } = require('enquirer');

// const prompt = new BasicAuth({
//   name: 'password',
//   message: 'Please enter your password',
//   username: 'rajat-sr',
//   password: '123',
//   showPassword: true
// });
// prompt
//   .run()
//   .then(answer => console.log('Answer:', answer))
//   .catch(console.error);

// prompt({
//   type: 'autocomplete',
//   name: 'flavor',
//   message: 'Pick your favorite flavor',
//   limit: 10,
//   choices: [
//     'Almond',
//     'Apple',
//     'Banana',
//     'Blackberry',
//     'Blueberry',
//     'Cherry',
//     'Chocolate',
//     'Cinnamon',
//     'Coconut',
//     'Cranberry',
//     'Grape',
//     'Nougat',
//     'Orange',
//     'Pear',
//     'Pineapple',
//     'Raspberry',
//     'Strawberry',
//     'Vanilla',
//     'Watermelon',
//     'Wintergreen'
//   ]
// })
//   .then(answer => console.log('Answer:', answer))
//   .catch(console.error);


(async() => {

  const answers = await prompt({
    type: 'autocomplete',
    name: 'flavor',
    message: 'Pick your favorite flavor',
    initial: 3,
    choices: [
      'almond',
      'apple',
      'banana',
      'cherry',
      'chocolate',
      'cinnamon',
      'coconut',
      'cotton candy',
      'grape',
      'nougat',
      'orange',
      'pear',
      'pineapple',
      'strawberry',
      'vanilla',
      'watermelon',
      'wintergreen'
    ]
  });

  console.log(answers);

})().catch(console.log);
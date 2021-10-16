// Simple usage of callback 
// function greeting(name) {
//     console.log('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);
  
  /* 
    Rewrite using async/await
  */

async function greeting() {
    const name = await processUserInput()
    alert('Hello ' + name)
  }
  
  async function processUserInput() {
    const name = await prompt('Please enter your name.')
    return name
  }
  
  greeting(processUserInput)
  
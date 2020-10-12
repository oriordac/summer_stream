const conn = require("./myFetch");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (data) => {
  rl.question('Would you like to commit this data? (y/n): ', (answer) => {
    if(answer.toLowerCase() == 'y') {
      conn.myFetch(data);
    }
    else if(answer.toLowerCase() == 'n') {
      console.log('Ending Program');
    }
    else {
      console.log('Invalid input');
      console.log('Ending Program');
    }
    rl.close();
  }); 
} 

module.exports = {
  askQuestion
}
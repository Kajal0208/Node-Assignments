const fs = require('fs');
const validator = require('validator')
//fs.writeFileSync('notes.txt','overwritten message')
const chalk = require('chalk');
const { log } = require('console');
fs.appendFileSync('notes.txt','Hello')

// console.log(chalk.green.bold("hello@gmail.com"))

//console.log(process.argv)

console.log("start");

setTimeout(()=>{
    console.log("set time out")
},2000)

setTimeout(()=>{
    console.log("0 set time out")
},0)

console.log("stop")
let rlSync = require('readline-sync');
let idSync = require('readline-sync');

let nome = rlSync.question("Qual o seu nome?\n");
let sbnome = idSync.question("Qual seu srobenome?\n");

console.log(`Bem vindo ${nome} ${sbnome}`);
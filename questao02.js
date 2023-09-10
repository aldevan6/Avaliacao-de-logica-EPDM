//2.	Idade em Dias (1020 - https://www.beecrowd.com.br/judge/pt/problems/view/1020).

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let idade = parseInt(lines.shift());

let anos = Math.floor(idade/365);
let meses = (Math.floor((idade % 365)/30));
let dias = (Math.floor((idade % 365)%30)); 

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");
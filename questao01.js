//1.	Distância (1016 - https://www.beecrowd.com.br/judge/pt/problems/view/1016).

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let km = parseInt(lines.shift());

let total = km * 2;

console.log(total + " minutos");
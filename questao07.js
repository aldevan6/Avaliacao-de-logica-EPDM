// 7.	System of a Download (2582 - https://tinyurl.com/5n7jcccm).

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let musicas = ["PROXYCITY","P.Y.N.G.","DNSUEY!","SERVERS","HOST!","CRIPTONIZE","OFFLINE DAY","SALT","ANSWER!","RAR?","WIFI ANTENNAS"];

let n = lines.shift();

for(let i = 0; i < n; i++) {
    let [n1, n2] = lines[i].split(' ');

    let soma = parseInt(n1) + parseInt(n2);
    console.log(musicas[soma]);
}
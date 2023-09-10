//4.	Dividindo X por Y (1116 - https://www.beecrowd.com.br/judge/pt/problems/view/1116).

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());

for(let i = 0; i < n; i++){
    let line = lines[i].split(' ');
    let x = parseFloat(line[0]);
    let y = parseFloat(line[1]);

    if(y === 0){
        console.log("divisao impossivel");
    }else{
        let total = parseFloat( x / y);
        console.log(total.toFixed(1));
    }
}
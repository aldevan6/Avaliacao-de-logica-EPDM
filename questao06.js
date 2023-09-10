//6.	A Sociedade do Anel (2949 - https://tinyurl.com/cn7yu9vw).
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = lines.shift();
let hobbit = 0;
let humano = 0;
let elfo = 0;
let anao = 0;
let mago = 0;
for(let i = 0; i < n; i++){
    let [cidade, raca ] = lines[i].split(' ');
    
    switch (raca) {
        case "X":            
            hobbit ++;
            break;
        case "H":            
            humano ++;
            break;
        case "E":            
            elfo ++;
            break;
        case "A":            
            anao ++;
            break;    
        default:            
            mago ++;
            break;
    }
}
console.log(hobbit +" Hobbit(s)");
console.log(humano +" Humano(s)");
console.log(elfo +" Elfo(s)");
console.log(anao +" Anao(oes)");
console.log(mago +" Mago(s)");
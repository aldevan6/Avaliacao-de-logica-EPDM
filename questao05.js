//5.	Pedra, Papel, Ataque Aéreo (2031 - https://tinyurl.com/3mx8w7fe).

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift()) ;

  for (let i = 1; i <= n; i++) {
    let jogador1 = lines.shift();
    let jogador2 = lines.shift();
  
    if(jogador1 == jogador2){
        switch (jogador1) {
            case "ataque":
                console.log("Aniquilacao mutua");
                break;
            case "pedra":
                console.log("Sem ganhador");
                break;
            default:
                console.log("Ambos venceram");
                break;
        }
    }else if (jogador1 == "ataque" || jogador1 == "pedra" && jogador2 == "papel") {
        console.log("Jogador 1 venceu");
    } else {
        console.log("Jogador 2 venceu");
    }
  }
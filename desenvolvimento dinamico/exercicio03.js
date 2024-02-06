let opção = 1;
let valor = ""
switch(opção){
  case 1: 
    valor = 2;
    console.log("Você escolheu o café. Deve pagar R$"+valor.toFixed(2))
    break
  case 2: 
    valor = 2.50;
    console.log("Você escolheu o chá. Deve pagar R$"+valor.toFixed(2))
    break
  case 3: 
    valor = 4;
    console.log("Você escolheu o leite. Deve pagar R$"+valor.toFixed(2))
    break
}
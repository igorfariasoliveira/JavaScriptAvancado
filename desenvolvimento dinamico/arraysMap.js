let times = [
  {nome:"Flamengo", pos:"Primeiro"},
  {nome:"Fluminence", pos:"Segundo"},
  {nome:"Botafogo", pos:"Terceiro"},
  {nome:"Vasco", pos:"Quarto"},
]

nomes = times.map(time => time.nome);
posicao= times.map(lugar => lugar.pos);
console.log(nomes,posicao);
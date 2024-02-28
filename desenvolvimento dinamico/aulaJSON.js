const pessoa = {
  nome: "igor",
  idade: 28,
  genero: "masculino"
};

const pessoajason = JSON.stringify(pessoa);
console.log(pessoajason);

const pessoaObj = JSON.parse(pessoajason);
console.log(pessoaObj)
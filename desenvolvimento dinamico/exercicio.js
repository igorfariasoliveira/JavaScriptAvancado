let nomes = ["Guilherme","Manuel","Samuel","Davi","João"];

nomes.unshift("Monica");
console.log(nomes);

nomes.pop();
console.log(nomes);
console.log(nomes.indexOf("Samuel"));

nomes.splice(2,1,"Emanuel");
console.log(nomes);
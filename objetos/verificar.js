const compras = {
  fruta : 'maçã',
  cereal : 'arroz',
  bebida : 'Coca',
};

function check(prop){
  if(compras.hasOwnProperty(prop)){
    return compras[prop];
  }else{
    return "Não encrontado";
  }
};

console.log(check("legume"));
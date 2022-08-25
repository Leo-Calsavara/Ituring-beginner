let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if(produtoA.internacional == true || produtoB.internacional == true || produtoC.internacional == true)
{
    produtoA.valor = produtoA.valor*1.2
    produtoB.valor = produtoB.valor*1.2
    produtoC.valor = produtoC.valor*1.2
}else{
    produtoA.valor = produtoA.valor*1.12
    produtoB.valor = produtoB.valor*1.12
    produtoC.valor = produtoC.valor*1.12
}

console.log(produtoA.valor + "\n" + produtoB.valor + "\n" + produtoC.valor)
let n = [17, 2, 25, 10, 150, 1500450271]
let aux, vet = 0;

let tam = n.length
console.log(tam)
while(vet <= tam-1)
{
    aux = 2
    while(n[vet]%aux!=0)
    {
        aux++
    }
    if(n[vet] == aux)
        console.log(`${n[vet]} é primo`)
    else
        console.log(`${n[vet]} não é primo`)
    
    vet++
}
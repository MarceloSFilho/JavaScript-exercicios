function valor (valordecimal){
    valoremreais = `R$ ${valordecimal.toFixed(2).toString().replace(".",",")}`
    console.log(valoremreais)//como virou
    console.log(valordecimal) //como o valor era
}
valor (0.1+0.2)
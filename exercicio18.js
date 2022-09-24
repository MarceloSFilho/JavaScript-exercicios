/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function numero (extenso){
    switch (extenso){
        case 0:
            return "Zero"
        case 1:
            return "Um"
        case 2:
            return "Dois"
        case 3:
            return "Tres"
            case 4:
                return "Quatro"
                case 5:
                    return "cinco"
                    case 6:
                        return "seis"
                        case 7:
                            return "sete"
                            case 8:
                                return "oito"
                                case 9:
                                    return "nove"
                                    case 10:
                                        return "dez"
                                        default:
                                            return "Número fora do intervalo"
    }
}
console.log (numero(0))
console.log (numero(1))
console.log (numero(2))
console.log (numero(3))
console.log (numero(4))
console.log (numero(5))
console.log (numero(11))

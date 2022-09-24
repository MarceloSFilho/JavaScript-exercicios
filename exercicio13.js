// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
//dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
function diasDaSemana (dias){

    switch (dias){
        case 2: case 3:
        case 4: case 5: case 6:
    return "dia de trabaia"
        case 1: case 7:
    return "fim de semana"
        default:
    return "dia da semana invalido"
    }
}
console.log(diasDaSemana(1))
console.log(diasDaSemana(5))
console.log(diasDaSemana(-1))
console.log(diasDaSemana(8))

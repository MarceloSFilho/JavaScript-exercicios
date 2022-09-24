/*Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui"*/

function carrosAVenda (carros){
    switch (carros){
        case "hatch":
            return "Compra efetuada com sucesso"
        case "motocicleta":
            return "Tem certeza que não prefere este modelo?"
        case "caminhonete":
            return "Tem certeza que não prefere este modelo?"
        case "sedans":
            return "Tem certeza que não prefere este modelo?"
            default:
                return "Não trabalhamos com este tipo de automóvel aqui"
    }
}
console.log (carrosAVenda("hatch"))
console.log (carrosAVenda("caminhonete"))
console.log (carrosAVenda("sedans"))
console.log (carrosAVenda("motocicleta"))
console.log (carrosAVenda("fiorino"))
function JurosSimples (CapitalInicial, juros, tempo){
return CapitalInicial + (CapitalInicial * juros * tempo)
}


function JurosComposto (CapitalInicial, juros, tempo){
return CapitalInicial * (1 + juros) ** tempo
}
console.log(JurosComposto(1000 ,10/1000 ,12))
console.log(JurosSimples(1000 ,10/1000 ,12))
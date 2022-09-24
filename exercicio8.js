let stringjogos = "10,15,20,8,25,3,12,30,1,17,27"

function avaliacaoJogos (stringjogos){
   const jogos = stringjogos.split(',')
        let melhoresPontuacoes = jogos[0]
        let pioresPontuacoes = jogos[0]
        let piorJogo = 1
        let records = 0

        for (let i = 1; i < jogos.length; i++){
            if (jogos[i] > melhoresPontuacoes) {
            melhoresPontuacoes = jogos[i] 
            records++
            }
            else if (jogos[i] < pioresPontuacoes){
            pioresPontuacoes = jogos[i]
            piorJogo = i+1;
            } 
        }
        return [records, piorJogo]
}
console.log (avaliacaoJogos(stringjogos))


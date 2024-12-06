// 2️⃣ Calculadora de partidas Rankeadas

//**O Que deve ser utilizado**

//- Variáveis 

//  [Nome,Vitorias,Derrotas]
let heroi = ['Vegita',120,50]

let niveis= [[0,10,"Ferro"],
            [11,20,"Bronze"],
            [21,50,"Prata"],
            [51,80,"Ouro"],
            [81,90,"Diamante"],
            [91,100,"Lendário"]]


let saldo = heroi[1] - heroi[2]

let maxlvl= [101,"Imortal"]

let rank = updateHeroi(saldo,niveis,maxlvl)


function updateHeroi(saldo,niveis,maxlvl){  

    if (saldo >= maxlvl[0]){
        return maxlvl[1]
    }
    else{
    for (let i = 0; i < niveis.length; i++) {
        if (saldo >= niveis[i][0] && saldo <= niveis[i][1]) {
           return  niveis[i][2]
            
        }
    }    
}
}

// ## Saída

console.log(`O Herói tem o saldo de ${saldo} e está no nível ${rank}`)

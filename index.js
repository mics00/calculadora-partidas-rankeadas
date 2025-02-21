

function calcularRank(vitorias,derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias; 

}

function calcularNivel(){
    if (vitorias < 10){
        return "Ferro";      

    } else if (vitorias >= 11 && vitorias <= 20){
        return "Bronze";

    } else if (vitorias >= 21 && vitorias <= 50){
        return "Prata";

    } else if (vitorias >= 51 && vitorias <= 80){
        return "Ouro";
    
    } else if (vitorias >= 81 && vitorias <= 90){
        return "Diamante";
    
    } else if (vitorias >= 91 && vitorias <= 100){
        return "Lendário";
    
    } else 
        return "Imortal";


}

let vitorias = 120;
let derrotas = 10;

let saldoVitorias = calcularRank(vitorias,derrotas)
let nivel = calcularNivel(saldoVitorias)
console.log("O herói tem o saldo de " + saldoVitorias + " e está no nivel " +nivel);






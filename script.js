function calculo(){
    let input = document.getElementById("input").value;
    let result = math.evaluate(input).toString();

    document.getElementById("resParagraph").textContent = result;
}

function adicionaOperador(op){
    document.getElementById("input").value += op;
}

function adicionaNumero(num){
    document.getElementById("input").value += num;
}
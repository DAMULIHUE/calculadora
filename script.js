let indexParag = 1;

function calculo(){
    let input = document.getElementById("input").value;
    let result = math.evaluate(input).toString();   

    document.getElementById(`resParagraph${indexParag}`).textContent = `${input} = ${result}`;
    indexParag < 6 ? indexParag++ : indexParag = 1;
}

function adicionaOperador(op){
    document.getElementById("input").value += op;
}

function adicionaNumero(num){
    document.getElementById("input").value += num;
}
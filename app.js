function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma.querySelector('#operandoA');
    let operandoB = forma.querySelector('#operandoB');
    let resultado = parseFloat(operandoA.value) + parseFloat(operandoB.value);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function multiplicar(){
    const forma = document.getElementById('forma');
    let operandoA = forma.querySelector('#operandoA');
    let operandoB = forma.querySelector('#operandoB');
    let resultado = parseFloat(operandoA.value) * parseFloat(operandoB.value);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function dividir(){
    const forma = document.getElementById('forma');
    let operandoA = forma.querySelector('#operandoA');
    let operandoB = forma.querySelector('#operandoB');
    let resultado = parseFloat(operandoA.value) / parseFloat(operandoB.value);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function borrar() {
    document.getElementById('forma').reset();
    document.getElementById('resultado').innerHTML = ``;
}
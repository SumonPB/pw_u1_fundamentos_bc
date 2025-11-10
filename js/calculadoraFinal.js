let num1 = 0;
let num2 = 0;
let signo;

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
if (
  !isNaN(elemento.innerText) === false &&
  (
    ['+', '*', '%', '/', '.'].includes(elemento.innerText[0]) ||
    (elemento.innerText[0] === '-' && ['+', '*', '%', '/', '.'].includes(elemento.innerText[1]))
  )
) {
        elemento.innerText = elemento.innerText.slice(1);
    }
    elemento.innerText = elemento.innerText + valor;
}

function sumar(num1, num2) {

    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    if (num1 !== 0) {
        return num1 / num2;
    }
    return "Error0";
}
function porcentaje(num1) {
    return num1 / 100;
}


function evaluar(elemento = document.getElementById('display')) {
    let text = elemento.innerText;
    let partes = text.match(/(?:^|(?<=[+\-*/%]))-?\d+(?:\.\d+)?|[+\-*/%]/g);
    if (partes[1] === '%') {
        num1 = Number(partes[0]);
        signo = partes[1];
        let tmp = 0;
        tmp = porcentaje(num1);
        partes.splice(0, 2, tmp.toString());
        elemento.innerText = partes[0];

    }

    if (!partes) return;
    if (partes.length === 1) {
        elemento.innerText = partes[0];
        return partes[0];
    }


    for (let i = 0; i < partes.length; i++) {
        if (partes[i] === '*' || partes[i] === '/' || partes[i] === '%') {
            num1 = Number(partes[i - 1]);
            signo = partes[i];
            num2 = Number(partes[i + 1]);
            let tmp = 0;

            switch (signo) {
                case '%': tmp = porcentaje(num1); break;
                case '*': tmp = multiplicar(num1, num2); break;
                case '/': tmp = dividir(num1, num2); break;
            }
            partes.splice(i - 1, 3, tmp.toString());
            i = 0;
        }
    }
    for (let i = 0; i < partes.length; i++) {
        if (partes[i] === '+' || partes[i] === '-') {
            num1 = Number(partes[i - 1]);
            signo = partes[i];
            num2 = Number(partes[i + 1]);
            let tmp = 0;

            switch (signo) {
                case '+': tmp = sumar(num1, num2); break;
                case '-': tmp = restar(num1, num2); break;
            }
            partes.splice(i - 1, 3, tmp.toString());
            i = 0;

        }
    }
    if (partes[0] === 'NaN') {
        elemento.innerText = "Error";
        setTimeout(() => {
            clearDisplay();
        }, 1000);
        return;
    }
    if (partes[0] === 'Error0') {
        elemento.innerText = "Error al dividir por cero";
        setTimeout(() => {
            clearDisplay();
        }, 1000);
        return;
    }
    elemento.innerText = partes[0];
    return partes[0];
}


function clearDisplay() {
    let elemento = document.getElementById('display');
    elemento.innerText = "";
}

function deleteChar() {
    let elemento = document.getElementById('display');
    let displayMsg = elemento.innerText;
    elemento.innerText = displayMsg.slice(0, displayMsg.length - 1);
}




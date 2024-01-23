const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#buttons-container button');

class Calculator {
    constructor(previousOperationText, currentOperationText){ //transformando os dados em propriedades do objeto para trabalhar diretamente com o obj e não com o dom
        this.previousOperationText = previousOperationText; // esse
        this.currentOperationText = currentOperationText; // e esses numeros são os impressos na tela
        this.currentOperation = '' ;// aqui vai ser os numeros que o usuário estará digitando no momento
    }

    // adicionando digito na tela
    addDigit(digit){

        this.currentOperation = digit
        this.updateScreen()
    }

    // Adicionando valores na tela da calculadora
    updateScreen(){
        this.currentOperationText.innerText += this.currentOperation; // o que for adicionado na calculadora será adicionado na operação atual

    }
}

const calc = new Calculator(previousOperationText, currentOperationText); // criando nova instancia de calculator

buttons.forEach ((btn) => {           //Eventos dos botões
    btn.addEventListener('click',(e)=> {
        const value = e.target.innerText;
        if (+value >= 0 || value === '.'){ // separando números de operação
            calc.addDigit(value);
        } else{
            console.log("Op: "+ value);
        }
    }) 
}) 
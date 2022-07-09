const botonNumeros =document.getElementsByName('data-number');
const botonOpera =document.getElementsByName('data-opera');
const botonIgual =document.getElementsByName('data-igual')[0];
const botonDelete =document.getElementsByName('data-delete')[0];

var result= document.getElementById('result');
var sonidoBoton =document.getElementById('sonido-boton');
var opActual = '';
var opAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarNumero(boton.innerText);
        sonidoBoton.play();
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectOperation(boton.innerText);
        sonidoBoton.play();
    })
});

botonIgual.addEventListener('click',function(){
    sonidoBoton.play();
calcular();
actualizarDisplay();
});

botonDelete.addEventListener('click',function(){
    sonidoBoton.play();
    clear();
    actualizarDisplay();
    });

function selectOperation(op){
    if(opActual === '') return;
    if(opAnterior !== ''){
        calcular();
    }
    operacion= op.toString();
    opAnterior=opActual;
    opActual='';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opAnterior);
    const actual = parseFloat(opActual);

if (isNaN(anterior) || isNaN(actual)) return;
switch(operacion){
    case '+':
        calculo = anterior+actual;
        break;
    case '-' :
        calculo = anterior-actual;
        break;
    case 'x' :
        calculo = anterior*actual;
        break;
    case '/' :
            calculo = anterior/actual;
            break;
    default:
        return;
   }
   
opActual= calculo;
operacion = undefined;
opAnterior = '';
}

function agregarNumero(num){
opActual=opActual.toString() + num.toString();
actualizarDisplay();
sonidoBoton.play();
}

function clear(){
    opActual = '';
    opAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value=opActual;
}

clear();
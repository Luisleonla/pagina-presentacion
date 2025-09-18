let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío.';

function mensajeConsola() {
    console.log('El botón fue clicado');
}

function preguntaPrompt() {
    let ciudadBracil = prompt('¿Escribe el nombre de una ciudad de Brasil?');
    alert(`Estuve en ${ciudadBracil} y me acorde de tí.`);
}

function mensajeAlerta() {
    alert('Yo amo JS');
}

function operacionSuma() {
    let primerNumero = parseInt(prompt('Escribe un número'));
    let segundoNumero = parseInt(prompt('Escribte otro número'));
    let resultado = primerNumero + segundoNumero;
    alert(`El resultado de la suma de ${primerNumero} más ${segundoNumero} es ${resultado}`);
}
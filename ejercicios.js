/*#7DaysOfCode - Lógica JS 1/7: Operaciones Booleanas
*/
let numeroUn = 1;
let stringUn = "1";
let numeroTreinta = 30;
let stringTreinta = "30";
let numeroDiez = 10;
let stringDiez = "10";

if (numeroUn == stringUn) {
    console.log("Las variables numeroUn y stringUn tienen el mismo valor, pero son tipos diferentes");
}else{
    console.log('Las variables numeroUn y stringUn no tiene el mismo valor');
}

if (numeroTreinta ==  stringTreinta) {
    console.log("Las variables númeroTreinte y stringTreinta tienen el mismo valor y el mismo tipo");
}else {
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

if (numeroDiez == stringDiez) {
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
}else {
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}

/* Ejercicios opcionales #7 
//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguajesDeProgramacion);
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push("Java");
lenguajesDeProgramacion.push("Ruby");
lenguajesDeProgramacion.push("GoLang");
console.log(lenguajesDeProgramacion);
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarListaInversa(lista) {
    for(let i = lista.length - 1; i >= 0; i--) {
        console.log(lista[i])
    }
}

mostrarListaInversa(lenguajesDeProgramacion);

//Crea una función que calcule el promedio de los elementos en una lista de números.
let numeros = [5, 7, 4, 34,12];
let promedio = 0;
function promedioLista(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;0
}

console.log(promedioLista(numeros));

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function maximoYMinimo(lista) {
    let maximo = lista[0];
    let minimo = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if(lista[i] > maximo) {
            maximo = lista[i];
        }else if(lista[i] < minimo) {
            minimo = lista[i];
        }
    }
    return { maximo: maximo, minimo: minimo };
}

console.log(maximoYMinimo(numeros));

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(lista) {
    let suma = 0;
    for(let i = 0; i< lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}
console.log(sumaLista(numeros));

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarValorLista(lista, valor) {
    for(let i = 0; i< lista.length; i++){
        if(lista[i] === valor) {
            return i; // Retorna la posición del elemento
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra
}

console.log(buscarValorLista(numeros, 5)); // Debería retornar la posición del número 34
console.log(buscarValorLista(numeros, 100)); // Debería retornar -1 ya que 100 no está en la lista

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumasListas(lista1, lista2) {
    let suma = [];
    for(let i = 0; i <lista1.length; i++) {
        suma.push(lista1[i] + lista2[i]);
    }
    return suma;
}
let listaNumeros1 = [38, 34, 23, 5, 32];
let listaNumeros2 = [12, 6, 8, 10, 4];
console.log(sumasListas(listaNumeros1, listaNumeros2));

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoListas(lista) {
    let cuadrado = [];
    for(let i = 0; i < lista.length; i++){
        cuadrado.push(lista[i] ** 2);
    }
    return cuadrado;
}
console.log(cuadradoListas(listaNumeros1));
*/

/* Ejercicios opcionales #6 Funciones
let encabezado = document.querySelector("h1");
encabezado.textContent = "Pruebas de ejercicios";
let respuestas = document.querySelector("p");

encabezado.textContent = "Pruebas de ejercicios";

function respuestasEjercicios(texto, id) {
    let respuesta = document.getElementById(id);
    respuesta.innerHTML = texto;
}

function obtenerIMC (peso, altura) {
    return peso / altura ** 2; 
}

let resultadoIMC = obtenerIMC(74, 1.74);
respuestasEjercicios(`Tu indice de masa corporal (IMC) es: ${resultadoIMC.toFixed(2)}`, "respuesta1");

function factorial (numero){
    if(numero === 0 || numero === 1) {
        return 1;
    }else{
        return numero * factorial(numero - 1);
    }
}
let numeroFactorial = 4
respuestasEjercicios(`El factorial ${numeroFactorial} es: ${factorial(numeroFactorial)}`, "respuesta2");

function conversionMondea(montoDolares) {
    let tipoDeCambio = 18.60;
    return montoDolares * tipoDeCambio;
}
let conversionAMXN = conversionMondea(4.80);
respuestasEjercicios(`La conversión de 4.80 DLS a MXN es: ${conversionAMXN.toFixed(2)}`, "respuesta3");

function areaPerimetroRectangulo(base, altura) {
    let area = base * altura;
    let perimetro = (base * 2) + (altura * 2);
    return `Del rectángulo con base ${base} y altura ${altura}, el área es de: ${area} y el perímetro es de: ${perimetro}`;
}

let textoRectangulo = areaPerimetroRectangulo(5, 10);
respuestasEjercicios(textoRectangulo, "respuesta4");

const pi = 3.14;

function areaPerimetroCirculo(radio) {
    let area = pi * (radio ** 2);
    let perimetro = 2 * pi * radio;
    return `Del circulo con radio ${radio} u, el área es de: ${area.toFixed(2)} u^2 y el perímetro es: ${perimetro.toFixed(2)} u`;
}

respuestasEjercicios(areaPerimetroCirculo(5), "respuesta5");

function tablaDeMultiplicar(numero) {
    let resultado = "";
    for(let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    return resultado;
}

respuestasEjercicios(tablaDeMultiplicar(5), "respuesta6");
*/

/* Ejercicios opcionales #5
function saludoHola(){
    console.log("¡Hola, mundo!");
}

saludoHola();

function holaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

holaNombre("Luis");

function doble(numero) {
    return numero * 2;
}

console.log(doble(5));

function promedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) /3;
}

console.log(promedio(2, 4, 6));

function mayor(numero1, numero2) {
    if(numero1 > numero2) {
        return numero1;
    }else {
        return numero2
    }
}

console.log(mayor(50, 20));

function cuadrado(numero) {
    return numero * numero;
}

console.log(cuadrado(4));

*/

/* Ejercicios opcionales #4

console.log("Mensaje de bienvenida al sitio web");
let nombre = "Luis";
console.log ("¡Hola, Luis!");
alert("¡Hola, Luis!");

let lenguaje = prompt("¿Cuál es tu lenguaje de programación favorito?");
console.log(lenguaje);

let valor1 = 10;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`El resulltado del primer valor: ${valor1}, más el segundo valor: ${valor2} es: ${resultado}`);
let diferencia = valor1 - valor2;
console.log(`La diferencia del primer valor (${valor1}) menos el segundo valor (${valor2}) es: ${diferencia}`)

let edad = prompt("Digite su edad");
console.log(`Usted es ${edad >=18 ? "mayor de edad" : "menor de edad."}`)

let numero = prompt("Digite un número");
if (numero > 0) {
    console.log("El número es positivo");
}else if (numero < 0) {
    console.log("El número es negativo");
}else {
    console.log("El número es cero");
}

let contador = 1;
while(contador <=10) {
    console.log(contador);
    contador++;
}


let nota = 10;
let resultado = nota >= 7 ? "Aprobado" : "Reprobado";
console.log(`El resultado obtenido es: ${resultado}`);

let aleatorioAl10 = Math.floor(Math.random() * 10);
console.log(aleatorioAl10);
let aleatorioAl1000 = Math.floor(Math.random() * 1000);
console.log(aleatorioAl1000);

*/

/*Ejercicios opcionales #3
let contador = 1
while (contador <= 10) {
    console.log(`Conteo en: ${contador}`);
    contador ++;
}

contador = 10;

while (contador >= 0) {
    console.log(`Conteo regresivo: ${contador}`);
    contador --;
}

let numeroDado = prompt("Ingresa un número");

while (numeroDado >=0) {
    console.log (`Conteo regresivo: ${numeroDado}`);
    numeroDado --;
}

let conteo = 0;
let numeroDado2 = prompt("Ingresa otro número");

while ( contador <= numeroDado2) {
    console.log(`Conteo progresivo: ${contador}`)
    contador ++;
}
    */

/*Ejercicios opcionales #2

let diaDeLaSemana = prompt("¿Qué día de la seamana es hoy?");
if (diaDeLaSemana == "Sábado" || diaDeLaSemana == "Domingo") {
    alert("¡Buen fin de semana!");
}else {
    alert("¡Buena semana!");
}

let numero = prompt("Favor de ingresar un número");
if ( numero > 0 ) {
    alert (" El núero entregado es positivo");
} else if ( numero < 0 ) {
    alert (" El número entregado es negativo");
}

let puntuacion = prompt("Ingresa la putuación obtenida");
if ( puntuacion >= 100 ) {
    alert ("¡Felicidades, has ganado!");
}else {
    alert("Intentalo nuevamente para ganar");
}

let saldo = 10000;
alert(`Tu saldo actual es: ${saldo}`);

let nombre = prompt ("Escribe tu nombre");
alert(`Que gusto que vuelvas ${nombre}`);
*/

/*Ejercicios opcionales #1

// alert('¡Bienvenida y bienvenido a nuestro sitio web!.');
let nombre  = 'Lua';
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = '¡Error! Completa todos los campos.';

console.log(nombre + ' ' + edad + ' ' + numeroDeVentas + ' ' + saldoDisponible);

alert (mensajeDeError);

nombre = prompt('¿Cuál es tu nombre?');
edad = prompt('¿Cuál es tu edad?');

console.log(nombre + ' ' + edad);

if ( edad >= 18 ) {
    alert("¡Puedes obtener tu licencia de conducir!");
}

*/
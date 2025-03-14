// variable con texto
// engrapar texto atajo: alt + z
let txt = "Aquí va una frase que me permitirá explorar los métodos de cadenas de caracteres de JavaScript. El primer método se llama length.";
let txt2 = txt.toUpperCase();
let txt3 = txt2.replace("CADENAS", "STRINGS");

// document
document.getElementById('cadena').innerHTML=txt;
document.getElementById('cadena2').innerHTML=txt2;
document.getElementById('cadena3').innerHTML=txt3;

// console
//console.log(txt.length);
//console.log(txt.at(10));
console.log(txt.toUpperCase());
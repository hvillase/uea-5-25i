let txt = "escribo un frase de prueba";

document.getElementById('texto').innerHTML=txt;

let loop ="";
    for(let i=0; i < txt.length; i++){
        loop += txt[i];
    }

document.getElementById('metodo').innerHTML=loop.replace("escribo", "digo");
// WebGL
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// cuadrado con rgb y alpha
ctx.fillStyle="rgb(0 255 0 / 60%)";
ctx.fillRect(0, 0, 180, 180);

ctx.fillStyle="red";
ctx.fillRect(320, 240, 200, 300);

ctx.fillStyle="rgb(0 0 255 / 50%)";
ctx.fillRect(450, 240, 100, 100);

// cuadrado sin relleno
ctx.strokeStyle="rgb(255, 0, 127)";
ctx.strokeRect(130, 220, 70, 80);

// triángulo
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();

// texto
ctx.font="bold 40px serif";
ctx.strokeText("Hola", 50, 100);
ctx.fillText("Adios", 400, 130);

// sombra
ctx.shadowColor = "red";
ctx.shadowBlur = 15;
ctx.fillStyle="magenta";
ctx.fillText("Sombras", 390, 200);

ctx.shadowBlur = 0;
ctx.beginPath();
ctx.arc(250, 500, 60, 0, 2 * Math.PI);
ctx.fill();

console.log("canvas");
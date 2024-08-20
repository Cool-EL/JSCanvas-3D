import { rotateX, rotateY, rotateZ, matScale, translateXY } from "./utils.js";
const canvas = document.getElementById("main-canvas");
let ctx;
if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
}
else {
    throw new Error("No canvas element!");
}
if (!ctx)
    throw new Error("No ctx element!");
const cubeWidth = 200;
const cubeLines = [
    [-1, 1, 1, 0],
    [-1, -1, 1, 0],
    [1, -1, 1, 0],
    [1, 1, 1, 0], // front face
    [-1, 1, -1, 0],
    [-1, -1, -1, 0],
    [1, -1, -1, 0],
    [1, 1, -1, 0], // back face
];
let cubeToDraw = [];
// Dra1cube
let angle = 0;
ctx.strokeStyle = "black";
const cubePos = [800, 400];
drawCube();
function drawCube() {
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cubeToDraw = structuredClone(cubeLines);
        // Order of rendering
        // 1) Transform
        // 2) Scale
        // 3) Translate
        cubeToDraw = rotateX(cubeToDraw, angle);
        cubeToDraw = rotateY(cubeToDraw, angle);
        cubeToDraw = rotateZ(cubeToDraw, angle);
        cubeToDraw = matScale(cubeToDraw, cubeWidth);
        cubeToDraw = translateXY(cubeToDraw, cubePos);
        ctx.beginPath();
        ctx.moveTo(cubeToDraw[0][0], cubeToDraw[0][1]);
        // Front
        ctx.lineTo(cubeToDraw[1][0], cubeToDraw[1][1]);
        ctx.lineTo(cubeToDraw[2][0], cubeToDraw[2][1]);
        ctx.lineTo(cubeToDraw[3][0], cubeToDraw[3][1]);
        ctx.lineTo(cubeToDraw[0][0], cubeToDraw[0][1]);
        // Back
        ctx.moveTo(cubeToDraw[4][0], cubeToDraw[4][1]);
        ctx.lineTo(cubeToDraw[5][0], cubeToDraw[5][1]);
        ctx.lineTo(cubeToDraw[6][0], cubeToDraw[6][1]);
        ctx.lineTo(cubeToDraw[7][0], cubeToDraw[7][1]);
        ctx.lineTo(cubeToDraw[4][0], cubeToDraw[4][1]);
        // Laterals
        ctx.moveTo(cubeToDraw[0][0], cubeToDraw[0][1]);
        ctx.lineTo(cubeToDraw[4][0], cubeToDraw[4][1]);
        ctx.moveTo(cubeToDraw[1][0], cubeToDraw[1][1]);
        ctx.lineTo(cubeToDraw[5][0], cubeToDraw[5][1]);
        ctx.moveTo(cubeToDraw[2][0], cubeToDraw[2][1]);
        ctx.lineTo(cubeToDraw[6][0], cubeToDraw[6][1]);
        ctx.moveTo(cubeToDraw[3][0], cubeToDraw[3][1]);
        ctx.lineTo(cubeToDraw[7][0], cubeToDraw[7][1]);
        ctx.stroke();
        // console.log(cubeLinesWithPos)
        if (angle >= 360)
            angle = 0;
        angle += 0.005;
        requestAnimationFrame(drawCube);
    }, 0);
}

import { fade } from "astro:transitions";

let drawingBoard;
let ctx;

let mouseX;
let mouseY;
let timer;

function initializeCanvas() {

    drawingBoard = document.querySelector(".drawing-board");
    ctx = drawingBoard.getContext('2d');

    fadePaint();

    drawingBoard.width = window.innerWidth;
    drawingBoard.height = window.innerHeight;

    window.addEventListener("resize", updateCanvasSize);

    window.addEventListener("mousedown", (evt) => {

        mouseX = evt.clientX;
        mouseY = evt.clientY;

		console.log("hello");
		window.addEventListener("mousemove", beginDrawing);

        console.log(timer);

	});

	window.addEventListener("mouseup", () => {

		console.log("bye");
		window.removeEventListener("mousemove", beginDrawing);

	});

}

function updateCanvasSize() {

    drawingBoard.width = window.innerWidth;
    drawingBoard.height = window.innerHeight;

}

function beginDrawing(evt) {

    const newX = evt.clientX;
    const newY = evt.clientY;

    draw(newX, newY);

}

function draw(newX, newY) {

    ctx.fillStyle = "white";
    ctx.beginPath();

    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(newX, newY);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;

    ctx.stroke();
    ctx.closePath();

    mouseX = newX;
    mouseY = newY;

}

function fadePaint() {

    ctx.save();

    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, drawingBoard.width, drawingBoard.height);

    ctx.restore();

    timer = setTimeout(fadePaint, 50);

}


export{initializeCanvas};
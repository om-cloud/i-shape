var gCanvas;
var gCtx;
var gCurrShape = 'rect';
var gOutLineColor = '#0050D1';
var gFillColor = '#E672EE';
var gCurrText = 'Example';
var gDragShape = false;
var gDrawInterval;
var gMouseDown = false;
var gPreviousX = 0;
var gPreviousY = 0;

function init() {
    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');

    // PART 1
    drawLine(10, 10, 130, 230);

    // PART 2
    drawTriangle(50, 250);

    // PART 3
    drawRect(250, 30);

    // PART 4
    drawCircle(330, 310);

    // PART 5 
    drawText('HOLLA!', 225, 225);

    // PATR 6
    clearCanvas();

    // PART 7
    // saveAndRestoreExample();

    // PART 8
    // drawImg();

    // PART 9
    // drawImg2();

    // PART 10
    // resizeCanvas();

    // PART 11
    window.addEventListener('resize', function () {
        // gCanvas.width = window.innerWidth;
        // gCanvas.height = window.innerHeight;
        resizeCanvas()
    })

    // PART 12 
    // click on canvas

    // PART 13 - Tainted canvas when download
    // drawImg3();
}

function setOutlineColor() {
    gOutLineColor = document.querySelector('.shape-color').value;
}

function setFillColor() {
    gFillColor = document.querySelector('.shape-color').value;


}

function setText() {
    gCurrText = document.querySelector('.word-input').value;
}

function startDragDraw() {

    if(!gDragShape) document.querySelector('.drag-draw').innerText='Shapes Stamp';
    else document.querySelector('.drag-draw').innerText= 'Drag Shapes';
    gDragShape = !gDragShape;
}


function drawShapes(offsetX, offsetY) {
    if (gCurrShape === 'circle') gDrawInterval = setInterval(drawCircle(offsetX, offsetY), 50)
    else if (gCurrShape === 'rect') gDrawInterval = setInterval(drawRect(offsetX, offsetY), 50)
    else if (gCurrShape === 'triangle') gDrawInterval = setInterval(drawTriangle(offsetX, offsetY), 50)
}

function drawShapes2(offsetX, offsetY) {
    var y = Math.abs(gPreviousY - offsetY)
    var x = Math.abs(gPreviousX - offsetX)
    console.log(y,x)
    if (gPreviousX === 0 && gPreviousY === 0) {
        if (gCurrShape === 'circle')  drawCircle(offsetX, offsetY)
        else if (gCurrShape === 'rect') drawRect2(offsetX, offsetY,50,30)
        gPreviousX = offsetX;
        gPreviousY = offsetY;
    } else if (y  > 5 || x > 5) {
        if (gCurrShape === 'rect')  drawRect2(offsetX, offsetY,x,y)
        else if (gCurrShape === 'circle') drawCircle2(offsetX, offsetY,y);
        else if (gCurrShape === 'line') drawLine2(offsetX, offsetY, gPreviousX, gPreviousY)
        else if (gCurrShape === 'triangle') drawTriangle2(offsetX, offsetY, gPreviousX, gPreviousY, y)
        gPreviousX = offsetX;
        gPreviousY = offsetY;
    }
}



function drawLine(x, y, xEnd = 250, yEnd = 250) {
    gCtx.beginPath();
    gCtx.lineWidth = '2';
    gCtx.moveTo(x, y);
    gCtx.lineTo(xEnd, yEnd);
    gCtx.strokeStyle = gOutLineColor;
    gCtx.stroke();
}


function drawLine2(xEnd, yEnd, x, y) {
    gCtx.beginPath();
    gCtx.lineWidth = '1';
    gCtx.moveTo(xEnd, yEnd);
    gCtx.lineTo(x, y);
    gCtx.strokeStyle = gOutLineColor;
    gCtx.stroke();
}

function drawTriangle(x, y) {
    gCtx.beginPath();
    gCtx.lineWidth = '2';
    gCtx.moveTo(x, y);
    gCtx.lineTo(130, 330);
    gCtx.lineTo(50, 370);
    // gCtx.lineTo(x,y);
    gCtx.closePath(); //insted of lineTo(x,y) 
    gCtx.strokeStyle = gOutLineColor;
    gCtx.stroke();
    gCtx.fillStyle = gFillColor;
    gCtx.fill();
}

function drawTriangle2(xCurrPoint, yCurrPoint, xPrevious, yPrevious, y) {
    gCtx.beginPath();
    gCtx.lineWidth = '2';
    gCtx.moveTo(xCurrPoint, yCurrPoint+y);
    gCtx.lineTo(xCurrPoint, yCurrPoint);
    gCtx.lineTo(xPrevious, yPrevious);
    // gCtx.lineTo(x,y);
    gCtx.closePath(); //insted of lineTo(x,y) 
    gCtx.strokeStyle = gOutLineColor;
    gCtx.stroke();
    gCtx.fillStyle = gFillColor;
    gCtx.fill();
}

function drawRect(x, y) {
    gCtx.beginPath();
    gCtx.lineWidth = '2';
    gCtx.rect(x, y, 150, 150); /// x, y, width, height
    gCtx.strokeStyle = gOutLineColor;
    gCtx.stroke();
    gCtx.fillStyle = gFillColor;
    gCtx.fillRect(x, y, 150, 150); /// x, y, width, height
}

function drawRect2(x, y,height,width) {
    gCtx.beginPath();
    gCtx.lineWidth = '1';
    gCtx.rect(x, y, height,width); /// x, y, width, height
    gCtx.strokeStyle = gOutLineColor;
    gCtx.stroke();
    gCtx.fillStyle = gFillColor;
    gCtx.fillRect(x, y, height,width); /// x, y, width, height
}

function drawCircle(x, y) {
    gCtx.beginPath();
    gCtx.lineWidth = '2';
    gCtx.arc(x, y, 60, 0, 2 * Math.PI); /// x, y, radius, startAngle, endAngle
    gCtx.strokeStyle = gOutLineColor;
    gCtx.stroke();
    gCtx.fillStyle = gFillColor;
    gCtx.fill();

}

function drawCircle2(x, y, r) {
    gCtx.beginPath();
    gCtx.lineWidth = '1';
    gCtx.arc(x, y, r, 0, 2 * Math.PI); /// x, y, radius, startAngle, endAngle
    gCtx.strokeStyle = gOutLineColor;
    gCtx.stroke();
    gCtx.fillStyle = gFillColor;
    gCtx.fill();

}

function drawText(text, x, y) {
    gCtx.lineWidth = '1';
    gCtx.strokeStyle = gOutLineColor;
    gCtx.fillStyle = gFillColor;
    gCtx.font = '32px Arial';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function saveAndRestoreExample() {
    gCtx.lineWidth = '2';
    gCtx.font = '40px Ariel';
    gCtx.strokeStyle = 'red';
    gCtx.fillStyle = 'white';
    drawText('before save', 100, 60);
    gCtx.save();
    drawText('after save', 100, 160)
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'red';
    drawText('after save and change', 20, 260);
    gCtx.restore();
    drawText('after restore', 100, 360);
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gCanvas.width / 2, gCanvas.height / 2);
}

function drawImg() {
    const elImg = document.querySelector('img');
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}

function drawImg2() {
    const img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    }
    img.src = './img/1.jpg';
}

function drawImg3() {
    const img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height); //img,x,y,width,height
    }
    img.src = 'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/';
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    console.log(data); /// show base64 string
    elLink.href = data;
    elLink.download = 'my-image.jpg';
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
}


function setShape(shape) {
    gCurrShape = shape;
}
var x = {
    name: 'popo',
    balance: 15
}

function draw(ev) {
    if(gCanvas){
    gCanvas.ondragstart = function () {
        return false;
    }
   }
    const {
        offsetX,
        offsetY
    } = ev;
    // const offsetX = ev.offsetX;
    // const offsetY = ev.offsetY;
    //console.log(offsetX, offsetY);
    if (gDragShape && ev.type === 'mouseup') {
        gDrawInterval = clearInterval();
        gMouseDown = false;
        gPreviousX = 0;
        gPreviousY = 0;
    }
    if (gDragShape && ev.type === 'mousedown') {
        gMouseDown = true;
    }
    if (gDragShape && ev.type === 'mousemove' && gMouseDown === true) {
        drawShapes2(offsetX, offsetY)
    } else if (!gDragShape && ev.type === 'click') {

        switch (gCurrShape) {
            case 'triangle':
                drawTriangle(offsetX, offsetY);
                break;
            case 'rect':
                drawRect(offsetX, offsetY);
                break;
            case 'text':
                drawText(gCurrText, offsetX, offsetY);
                break;
            case 'line':
                drawLine(offsetX, offsetY);
                break;
            case 'circle':
                drawCircle(offsetX, offsetY);
                break;

        }
    }
}


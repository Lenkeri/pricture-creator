const canvasElement = document.querySelector('#canvas');
const ctx = canvasElement.getContext('2d');
const toolbar = document.querySelector('.toolbar');
const colorType = document.querySelector('.color-type');
// colorType.addEventListener('change', () => {
//   colorCtxPen = colorType.value;
// });

canvasElement.setAttribute('width', window.innerWidth);
canvasElement.setAttribute('height', window.innerHeight - toolbar.offsetHeight);


const sizeSetting = document.querySelector('.size-setting');
const sizeValue = document.querySelector('.size-value')
sizeSetting.oninput = function (){
  sizeValue.textContent = sizeSetting.value;
};
const color = document.querySelector('.color');


let colorCtxPen = colorType.value;
let mouseDown = false;

/*canvasElement.addEventListener('click', function(evt) {
  if (!mouseDown) {
  let layerX = evt.layerX;
  let layerY = evt.layerY;
  ctx.fillStyle = colorCtxPen;

  ctx.fillRect(layerX, layerY, sizeSetting.value, sizeSetting.value);
  }
})*/

canvasElement.addEventListener('mousedown', function(evt){

  mouseDown = true;
  ctx.beginPath();
  let layerX = evt.layerX;
  let layerY = evt.layerY;
  ctx.strokeStyle = colorType.value;
  // ctx.fillRect(layerX, layerY, sizeSetting.value, sizeSetting.value);
  ctx.moveTo(layerX, layerY);
  ctx.lineWidth = sizeSetting.value;
  // document.querySelector('input[type="radio"]:checked')
});

canvasElement.addEventListener('mousemove', function(evt){
  if (mouseDown) {
    layerX = evt.layerX;
    layerY = evt.layerY;
    ctx.fillStyle = colorCtxPen;
    ctx.lineTo(layerX, layerY);
    ctx.stroke();

  }
});

canvasElement.addEventListener('mouseup', function(evt){
  mouseDown = false;
});

//радио кнопки
// const pencil = document.querySelector('#pencil');
const pencil = document.querySelector('input[type="radio"]')
const rubber = document.querySelector('#rubber');
const inputToDraw = document.querySelector('.input-to-draw')
 inputToDraw.addEventListener('change', function(evt, ){
if (pencil == checked){
  console.log(1)
}
 })

const resetCanvas = document.querySelector('.reset-canvas');
resetCanvas.addEventListener('click', function(){
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
})

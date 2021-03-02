const canvasElement = document.querySelector('#canvas');
const ctx = canvasElement.getContext('2d');
const toolbar = document.querySelector('.toolbar');
const colorType = document.querySelector('.color-type');
// colorType.addEventListener('change', () => {
//   colorCtxPen = colorType.value;
// });

canvasElement.setAttribute('width', window.innerWidth);
canvasElement.setAttribute('height', window.innerHeight - toolbar.offsetHeight);
ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, canvasElement.width, canvasElement.height)

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

// canvasElement.addEventListener('mousedown', function(evt){

//   mouseDown = true;
//   ctx.beginPath();
//   let layerX = evt.layerX;
//   let layerY = evt.layerY;
//   ctx.strokeStyle = colorType.value;
//   // ctx.fillRect(layerX, layerY, sizeSetting.value, sizeSetting.value);
//   ctx.moveTo(layerX, layerY);
//   ctx.lineWidth = sizeSetting.value;
//   // document.querySelector('input[type="radio"]:checked')
// });

// canvasElement.addEventListener('mousemove', function(evt){
//   if (mouseDown) {
//     layerX = evt.layerX;
//     layerY = evt.layerY;
//     ctx.fillStyle = colorCtxPen;
//     ctx.lineTo(layerX, layerY);
//     ctx.stroke();

//   }
// });

// canvasElement.addEventListener('mouseup', function(evt){
//   mouseDown = false;
// });

//радио кнопки
// const pencil = document.querySelector('#pencil');
const pencil = document.querySelector('input[type="radio"]')
const rubber = document.querySelector('#rubber');
const inputToDraw = document.querySelector('.input-to-draw')
//  inputToDraw.addEventListener('change', function(evt, ){
// if (pencil == checked){
//   console.log(1)
// }
//  })

let startX;
let startY;
 canvasElement.addEventListener('mousedown', function(evt){
  mouseDown = true;
  startX = evt.layerX;
  startY = evt.layerY;
  // let oneX = evt.layerX;
  // let oneY = evt.layerY;

  // return array = [oneX, oneY];

  // let layerX = evt.layerX;
  // let layerY = evt.layerY;
  // ctx.moveTo(layerX, layerY);
  // ctx.clearRect(layerX, layerY, sizeSetting.value, sizeSetting.value);
});

const step = 5;

canvasElement.addEventListener('mousemove', function(evt, array){

  if (mouseDown) {
    const stopX = evt.layerX;
    const stopY = evt.layerY;
    const dx = stopX - startX;
    const dy = stopY - startY;
    layerX = evt.layerX;
    layerY = evt.layerY;

    console.log(twoX, twoY + 'two');
    // ctx.clearRect(layerX, layerY, sizeSetting.value, sizeSetting.value);
    for(let i = 0; oneX < twoX || oneY < twoY;i++){

      let stepsX = deltaX / step;
      console.log(stepsX + 'олаотпо');

    }
  }
});

canvasElement.addEventListener('mouseup', function(evt){
  mouseDown = false;
});
const resetCanvas = document.querySelector('.reset-canvas');
resetCanvas.addEventListener('click', function(){
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
});




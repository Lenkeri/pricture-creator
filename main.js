const canvasElement = document.querySelector('#canvas');
const ctx = canvasElement.getContext('2d');
const toolbar = document.querySelector('.toolbar');
const colorType = document.querySelector('.color-type');
// colorType.addEventListener('change', () => {
//   colorCtxPen = colorType.value;
// });

canvasElement.setAttribute('width', window.innerWidth);
canvasElement.setAttribute('height', window.innerHeight - toolbar.offsetHeight);
// ctx.fillStyle = 'grey';
// ctx.fillRect(0, 0, canvasElement.width, canvasElement.height)

const sizeSetting = document.querySelector('.size-setting');
const sizeValue = document.querySelector('.size-value');
sizeSetting.oninput = function (){
  sizeValue.textContent = sizeSetting.value;
};
const color = document.querySelector('.color');

let colorCtxPen = colorType.value;
let mouseDown = false;

// canvasElement.addEventListener('click', function(evt) {
//   if (!mouseDown) {
//   let layerX = evt.layerX;
//   let layerY = evt.layerY;
//   ctx.fillStyle = colorCtxPen;

//   ctx.fillRect(layerX, layerY, sizeSetting.value, sizeSetting.value);
//   }
// })

//радио кнопки
const pencil = document.querySelector('#pencil');
// const pencil = document.querySelector('input[type="radio"]');
const rubber = document.querySelector('#rubber');
const toolsElement = document.querySelector('.tools');

toolsElement.addEventListener('change', function(evt){
  const checked = toolsElement.querySelector('input:checked');
  switch (checked.value) {
    case 'pencil': initPencil(); break;
    case 'rubber': initRubber(); break;
  };

});


// let mouseDown = false;
let mouseDownListener = null;
let mouseMoveListener = null;
let mouseUpListener = null;
const removeAllListeners = function() {
  canvasElement.removeEventListener('mousedown', mouseDownListener);
  canvasElement.removeEventListener('mousemove', mouseMoveListener);
}

const initPencil = function() {
  removeAllListeners()
  mouseDownListener = function(evt){
    mouseDown = true;
    ctx.beginPath();
    let layerX = evt.layerX;
    let layerY = evt.layerY;
    ctx.strokeStyle = colorType.value;
    ctx.moveTo(layerX, layerY);
    ctx.lineWidth = sizeSetting.value;
    // document.querySelector('input[type="radio"]:checked')
  }
  canvasElement.addEventListener('mousedown', mouseDownListener);

  mouseMoveListener = function(evt) {
    if (mouseDown) {
      layerX = evt.layerX;
      layerY = evt.layerY;
      ctx.fillStyle = colorCtxPen;
      ctx.lineTo(layerX, layerY);
      ctx.stroke();
    }
  };
  canvasElement.addEventListener('mousemove', mouseMoveListener);

  mouseUpListener = function(evt){
    mouseDown = false;
  }

  canvasElement.addEventListener('mouseup', mouseUpListener);
}

const initRubber = function() {
  removeAllListeners()

  let startX;
  let startY;
  mouseDownListener = function(evt){
    mouseDown = true;
    startX = evt.layerX;
    startY = evt.layerY;
    let layerX = evt.layerX;
    let layerY = evt.layerY;
    ctx.clearRect(layerX, layerY, sizeSetting.value, sizeSetting.value);
    ctx.fillStyle = colorCtxPen;

  }
   canvasElement.addEventListener('mousedown', mouseDownListener);

  const step = 1;

  mouseMoveListener = function(evt, array){

    if (mouseDown) {
      const stopX = evt.layerX;
      const stopY = evt.layerY;
      const dx = stopX - startX;
      const dy = stopY - startY;
      layerX = evt.layerX;
      layerY = evt.layerY;
      const stepsX = Math.abs(dx / step);
      const stepsY = Math.abs(dy / step);
      ctx.clearRect(layerX, layerY, sizeSetting.value, sizeSetting.value);
      const steps = Math.max(stepsX, stepsY);
      const stepX = dx / steps;
      const stepY = dy / steps;
      for(let i = 1;  i < steps; i++){
        const x = startX + i * stepX;
        const y = startY + i * stepY;
        ctx.strokeStyle = 0;
        ctx.clearRect(x, y, sizeSetting.value, sizeSetting.value);
      }
      startX = stopX;
      startY = stopY;
    }
  }
  canvasElement.addEventListener('mousemove', mouseMoveListener);

  mouseUpListener = function(evt){
    mouseDown = false;
  }
  canvasElement.addEventListener('mouseup', mouseUpListener);
}

const resetCanvas = document.querySelector('.reset-canvas');
resetCanvas.addEventListener('click', function(){
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
});

const checkeded = toolsElement.querySelector('input:checked');
if(checkeded.value == 'pencil'){
  initPencil()
}

document.addEventListener('keydown', function(evt){
  if(evt.code == "KeyB"){
    checkeded.value = 'pencil';
    pencil.setAttribute('checked', 'true');
      initPencil()
      pencil.setAttribute('checked', 'true');
      rubber.removeAttribute('checked');


  };
  if(evt.code == "KeyE"){
    checkeded.value = 'rubber';
      initRubber()
      rubber.setAttribute('checked', 'true');
      pencil.removeAttribute('checked');

  }
});

const saveButton = document.querySelector('.button--save');
saveButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const element = document.querySelector('.link-download');
  if (element) {
    element.remove();
  }
  canvasElement.toBlob((blob) => {
    const link = document.createElement('a');
    link.classList.add('link-download');
    link.textContent = 'Загрузить';
    link.download = 'image.png';
    link.href = window.URL.createObjectURL(blob);
    link.addEventListener('click', () => {
      link.remove();
    });
    toolbar.appendChild(link);
  }, 'image/png');
});

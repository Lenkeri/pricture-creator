const canvasElement = document.querySelector('#canvas');
const ctx = canvasElement.getContext('2d');
const toolbar = document.querySelector('.toolbar');

canvasElement.setAttribute('width', window.innerWidth);
canvasElement.setAttribute('height', window.innerHeight - toolbar.offsetHeight);
ctx.fillText('Some text', 10, 50);

const sizeSetting = document.querySelector('.size-setting');
const sizeValue = document.querySelector('.size-value')
sizeSetting.oninput = function (){
  sizeValue.textContent = sizeSetting.value;
};
const color = document.querySelector('.color');




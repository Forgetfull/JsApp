const div1 = document.querySelector('.innerDiv');
const div2 = document.querySelector('.innerDiv2');
const div3 = document.querySelector('.innerDiv3');


div1.addEventListener('click',changeColor);
div2.addEventListener('click',changeColor);
div3.addEventListener('click',changeColor);

//Событие клика поднимаетя все выше и выше
function changeColor(){
	setTimeout(() => this.style.backgroundColor = 'red', 5000);
	
}

//event.stopImmediatePropagation() - остановка всплатия



// function taimerStop(stInter,stop){
// 	let taim1 = setInterval(()=>{console.log(1)},1000);
// 	setTimeout(()=>{clearInterval(taim1)},5000);
// };






// id всех кнопок 
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
// функ воис
function voice(){
	alert("hello word");
}

btn4.addEventListener('click', () => {alert("asdf")});


document.onkeypress = function zaz(event){
	console.log(event);
}
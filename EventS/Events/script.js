//События мыши:
//
//click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
//contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
//mouseover / mouseout – когда мышь наводится на / покидает элемент.
//mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
//mousemove – при движении мыши.
//События на элементах управления:
//
//submit – пользователь отправил форму <form>.
//focus – пользователь фокусируется на элементе, например нажимает на <input>.
//Клавиатурные события:
//
//keydown и keyup – когда пользователь нажимает / отпускает клавишу.
//События документа:
//
//DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
//CSS events:
//
//transitionend – когда CSS-анимация завершена.


//Обязательно к событиюдобавляем On
document.onkeypress = function zaz(event){
	console.log(event);
}


// функция горячей клавиши.
document.addEventListener("keypress", function(e){
	// q - 113,w - 119, e - 101
	console.log(e.keyCode);
	if(e.keyCode == 113){
		console.log(e.key)
	}
});

//Горячие клваиши
// -----------вариант1------------

let flag = false;
document.onkeydown = function(e){
	if (e.code == 'AltLeft') flag = true;//flag нужен для сраб именно Alt+n
	if (e.code == 'KeyN' && flag){
		console.log("ok")
		flag = false;
		console.log('work');
	}
}


// -----------вариант2------------
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.onkeydown = function(event){
	console.log(event.code);
	if(event.code == 'AltLeft'){
		console.log("AltWork")
		document.onkeyup = function (event){
			if(event.code == 'KeyN'){
				console.log("work")
				voice();
			}
			else{
					document.onkeydown = null;//обнуляем если после Alt нажато не n

			}
		}
	}
}

//общая функция для посадки на обьекта события
//Если изменть на querySelectorAll то с помощью перебора колекции 
//можно 
function catchClass(OBJ,EVENT){
        const obj = document.querySelector(OBJ);
        obj.addEventListener("click", EVENT)    
        console.log('query') 
}






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
alert("text");
 
};








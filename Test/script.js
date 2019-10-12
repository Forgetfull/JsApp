
//Обязательно к событиюдобавляем On
/*document.onkeypress = function zaz(event){
	console.log(event);
}
*/
// функция горячей клавиши.
/*document.addEventListener("keypress", function(e){
	// q - 113,w - 119, e - 101
	console.log(e.keyCode);
	if(e.keyCode == 113){
		console.log(e.key)
	}
});
*/
//Горячие клваиши
// -----------вариант1------------
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let flag = false;
// document.onkeydown = function(e){
// 	if (e.code == 'AltLeft') flag = true;
// 	if (e.code == 'KeyN' && flag){
// 		console.log("ok")
// 		flag = false;
// 		console.log('work');
// 	}
// }


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
					document.onkeydown = null;

			}
		}
	}
}

// document.onkeydown = function(event){
// 		console.log(event.keyCode);
// }




// событие нажате на клавишу
// событие комбинация клавиш
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





// btn4.addEventListener('click', () => {alert("asdf")});



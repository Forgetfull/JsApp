//обработчик события ставим на родителя 
// c помощью event.target опредялем на каком элементе произошел клик
const grid = document.querySelector('.grid');





//Element.closest() - возвращает ближайший родительский элемент (или сам элемент)
//Проверка (!target.closest) вернет true если нет нужного род элемента
//node.contains( otherNode ) dthytn
document.onclick = function(event){
  let target = event.target; // где был клик
  console.log(grid.contains(event.target));
  console.log(grid.compareDocumentPosition(event.target));
  if(!event.target.closest('.grid')){return};//проверка что элемент находится в grid
  if(!grid.contains(event.target)){alert("1")} //проверка что элемент находится в grid
  event.target.style.background = "red";

}



// Применение делегирования: действия в разметке
// Приём проектирования «поведение»
// Поведение: «Переключатель» (Toggler)
// Спрячьте сообщения с помощью делегирования
// Раскрывающееся дерево
// Сортируемая таблица
// Поведение "подсказка"







//add css class
function addClass(){

}















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
    alert('voice');
};








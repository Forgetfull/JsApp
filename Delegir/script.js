//const grid = document.querySelector('.grid');

//grid.addEventListener('click', function(event){
//        let target = event.target;
//        console.log(target);
//        target.style.backgroundColor = 'red';
//} )      




//catchClass('.grid',(event) =>{
//    let target = event.target;
//    target.style.backgroundColor = 'green';    
//});


addCssStyle('.grid','backgroundColor',"green");










//function lovli id
function catchId(ID,EVENTS){
  let obj = document.getElementById(ID);
  obj.addEventListener('click', EVENTS);
  console.log('catchId')
}




//function lovli querrySelect
function catchClass(CLASS,EVENT){
        const obj = document.querySelector(CLASS);
        obj.addEventListener("click", EVENT)    
        console.log('query') 
}

//add css class
function addClass(){

}



//add css ctyly
function addCssStyle(Element,styleCss,option){
  const elem = document.querySelector(Element);
  console.log(elem);
   let  q = styleCss;      
  elem.style.q = "red";
}

//catchId('test',voice);
//catchClass('.top-line',voice);
//addCssStyle("#test",);

//catch many objacts
//querySelector - vozvrat kolekcia , net svoistva ONCLICK
//const div = document.getElementsByTagName('div');
//for(let i = 0; i < div.length;i ++ ){
//        div[i].onclick = voice;
//}
//console.log(div);











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








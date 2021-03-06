//faunction createElement(tag,props, ..children){
///  const element = document.createElement(tag); 


 //for (let prop in props){
 
//  element[prop] = props[prop];//elements.type = props.type;
// }     
//}

function createTodoItem(title){
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
	checkbox.className = "checkbox"

	const label = document.createElement('label');
	label.innerText = title;
	label.className = "title";

	const editInput = document.createElement('input');
	editInput.type = "text";
	editInput.className = "textfield"; 

	const editButton = document.createElement('button');
	editButton.innerText = "Изменить";
	editButton.className = "edit"; 

	const deleteButton = document.createElement('button');
	deleteButton.innerText = "Удалить";
	deleteButton.className = "delete"; 	

	const listItem = document.createElement('li');
	listItem.className = "todo-item"; 	


	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	bindEvents(listItem)

	return listItem;
};

function bindEvents(todoItem){
	const checkbox = todoItem.querySelector('.checkbox');
	const editButton = todoItem.querySelector('button.edit');
	const deleteButton = todoItem.querySelector('button.delete');
	checkbox.addEventListener('change', toggleTodotem);
	editButton.addEventListener('click', editTodoItem);
	deleteButton.addEventListener('click', deleTodoItem);

}

function addTodoItem(){
	event.preventDefault();

	if(addInput.value === '') return alert("vvedi chot");
	const todoItem  = createTodoItem(addInput.value);
	todoList.appendChild(todoItem);
	addInput.value = '';
};

function toggleTodotem({target}){
	console.log(target);
	console.log(this);
}

function editTodoItem(){
	const listItem = this.parentNode;
  const title =  listItem.querySelector('.title');
	const editInput = listItem.querySelector('.textfild');
	const isEditing = listItem.querySelector('.editing');

   if(isEditing){
        title.innerText = editInput.value;
        this.innerText = 'Изменить';
   } else {
        editInput.value = title.innerText;
        this.innerText = 'Сохранить';
   }
   listItem.classList.toggle('editing');    
}

function deleTodoItem(){
	const listItem = this.parentNode;
  todoList.removeChild(listItem);
}


const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const addItems = document.querySelectorAll('.todo-item');


todoForm.addEventListener('submit', addTodoItem);

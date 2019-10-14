//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//плагин для ловли id and class
//плагин для коментирвания 
// как вставляется ListItem
//функция добавления элемента add elements при нажатии на кнопку c захватом значения input







//функция создания элемента
//var child = element.appendChild(child); - добавляет элемент в конец списка родителя()
//element родительский элемент.
//child это элемент вставляется в конец element.
function createElement(title){


	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'checkbox';
	console.log(checkbox.type)


	const label = document.createElement('label');
	label.innerText = title;
	label.className = 'title';


	const editInput = document.createElement('input');
	editInput.type = 'text';
	editInput.className = 'textfield';


	const editButton = document.createElement('button');
	editButton.innerText = "Изменить";
	editButton.className = 'edit';

	const deleteButton = document.createElement('button');
	deleteButton.innerText = "Удалить";
	deleteButton.className = 'delete';

	const   listItem = document.createElement('li');
	listItem.className = 'todo-item';


	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);


	const todolist = document.querySelector('#todo-list');
	todolist.appendChild(listItem);
	return listItem; //зечем здесь ретурн
}

createElement("1111");
createElement("1111");






//функция присваивания события к кнопкам
//функция добавления элемента
//функция удаления элемента
//функция редактирования

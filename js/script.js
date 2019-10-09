const addButton = document.querySelector('.add');
const textField = document.querySelector('.input');

addButton.onclick = function (){
    const ul = document.querySelector("#todo");
    const li = document.createElement('li');
    const button = document.createElement('button');
    const i = document.createElement('i');

    i.setAttribute('class', 'fas fa-arrow-circle-right');
    li.setAttribute('class', 'items');

    const txtElement = document.createTextNode(textField.value);

    button.appendChild(i);
    li.appendChild(txtElement);
    li.appendChild(button);
    ul.appendChild(li);
    textField.value = '';
}
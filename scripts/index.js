const inputElement = document.querySelector('.input');
const addButton = document.querySelector('.add');
const listaTodos = document.querySelector('#todos');
const listaDoing = document.querySelector('#doing');
const listaDone = document.querySelector('#done');

const todoItems = ['Teste'];
const doingItems = ['Teste 2'];
const doneItems = ['Teste 3'];

function renderLists(){
    listaTodos.innerHTML = '';
    listaDoing.innerHTML = '';
    listaDone.innerHTML = '';

    for(item of todoItems){
        var li = document.createElement('li');
        var txt = document.createTextNode(item);
        var button = document.createElement('button');
        var i = document.createElement('i');

        li.setAttribute('class', 'items');
        button.setAttribute('onclick', 'moveToDoing(' + todoItems.indexOf(item) + ')');
        i.setAttribute('class', 'fas fa-arrow-circle-right');

        button.appendChild(i);
        li.appendChild(txt);
        li.appendChild(button);
        listaTodos.appendChild(li);
    }

    for(item of doingItems){
        var li = document.createElement('li');
        var txt = document.createTextNode(item);
        var button = document.createElement('button');
        var i = document.createElement('i');

        li.setAttribute('class', 'items');
        button.setAttribute('onclick', 'moveToDone(' + doingItems.indexOf(item) + ')');
        i.setAttribute('class', 'fas fa-arrow-circle-right');

        button.appendChild(i);
        li.appendChild(txt);
        li.appendChild(button);
        listaDoing.appendChild(li);
    }

    for(item of doneItems){
        var li = document.createElement('li');
        var txt = document.createTextNode(item);
        var button = document.createElement('button');
        var i = document.createElement('i');

        li.setAttribute('class', 'items');
        button.setAttribute('onclick', 'removeItem(' + doneItems.indexOf(item) + ')');
        i.setAttribute('class', 'fas fa-times-circle');

        button.appendChild(i);
        li.appendChild(txt);
        li.appendChild(button);
        listaDone.appendChild(li);
    }
}

renderLists();

function addItem(){
    todoItems.push(inputElement.value);
    inputElement.value = '';
    renderLists();
}

function moveToDoing(pos){
    doingItems.push(todoItems[pos]);
    todoItems.splice(pos, 1);
    renderLists();
}

function moveToDone(pos){
    doneItems.push(doingItems[pos]);
    doingItems.splice(pos, 1);
    renderLists();
}

function removeItem(pos){
    doneItems.splice(pos, 1);
    renderLists();
}

addButton.onclick = addItem;
// target all HTML elements
const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

const renderTodos = function (todos) {
  // clear the todo list
  todoList.innerHTML = '';

  // set the count of todo items
  todoCountSpan.textContent = todos.length;

  for (let i = 0; i < todos.length; i++) {
    // get the todo item
    const todo = todos[i];

    // construct the li element
    const li = document.createElement('li');

    // set the text content of li
    li.textContent = todo;

    // set attributes of li
    li.setAttribute('data-index', i);

    // construct a button element
    const button = document.createElement('button');

    // set the text of the button element
    button.textContent = 'Complete ✔️';

    li.appendChild(button);
    todoList.appendChild(li);
  }
};

const getDataFromLocalStorage = function () {
  // get "todos" from LS
  const dataFromLS = JSON.parse(localStorage.getItem('todos'));

  // check if not null
  if (!dataFromLS) {
    return [];
  } else {
    return dataFromLS;
  }
};

const storeTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const onSubmit = function (event) {
  event.preventDefault();

  // clean up the input element and get the text content and remove any white spaces hello

  const todoText = todoInput.value.trim();

  if (todoText === '') {
    return;
  }

  // if not empty then get todos from LS
  const todos = getDataFromLocalStorage();

  // push new todo item to array
  todos.push(todoText);

  // reset the input form value
  todoInput.value = '';

  storeTodos(todos);
  renderTodos(todos);
};

const onLoad = function () {
  // get todos data from LS
  const todos = getDataFromLocalStorage();

  // render todo list
  renderTodos(todos);
};

const onClick = function (event) {
  const element = event.target;

  // check if click event originated from a button
  if (element.matches('button')) {
    // get index value from data attribute of data-index
    const index = element.parentElement.getAttribute('data-index');
    const todos = getDataFromLocalStorage();
    todos.splice(index, 1);

    storeTodos(todos);
    renderTodos(todos);
  }
};

// Add event listeners
window.addEventListener('load', onLoad);
todoForm.addEventListener('submit', onSubmit);
todoList.addEventListener('click', onClick);

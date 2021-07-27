import './style.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList('Aprender JavaScript');

const tarea = new Todo('Aprender JavaScript');

todoList.nuevoTodo( tarea );


crearTodoHtml( tarea ); 


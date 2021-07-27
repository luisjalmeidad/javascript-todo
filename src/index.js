import './style.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList('Aprender JavaScript');

const tarea = new Todo('Aprender JavaScript');
// const tarea2 = new Todo('Aprender TypeScript');

todoList.nuevoTodo( tarea );
// todoList.nuevoTodo( tarea2 );

// tarea.completado = true;


console.log( todoList );

crearTodoHtml( tarea ); 


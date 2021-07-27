
import { Todo } from '../classes/';
import { todoList } from '../index';


const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');


export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class= "${ (todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;


    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;



}


// Eventos

txtInput.addEventListener('keyup', ( event ) => {

    if ( event.keyCode === 13 && txtInput.value.length > 0){

        const nuevoTodo = new Todo( txtInput.value );
        
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );

        txtInput.value = '';
    }

    

})

divTodoList.addEventListener('click', (event) =>{


    const nombreElemento    = event.target.localName; // Devuelve la etiqueta HTML que es presionada con un clic (button, label, input)
    const todoElement       = event.target.parentElement.parentElement; // Encuentro al (li) del html 
    const todoId            = todoElement.getAttribute('data-id'); // obtengo el ID del (li) del html

    if (  nombreElemento.includes('input')  ){ // Clic en el check

        todoList.marcarCompletado( todoId );

        todoElement.classList.toggle('completed');

    } else if(  nombreElemento.includes('button')  ) {

        todoList.eliminarTodo( todoId );
        
        divTodoList.removeChild( todoElement );
        
    }


})

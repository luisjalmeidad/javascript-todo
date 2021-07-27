
export class Todo {
    
    
    constructor( tarea ) {

        this.tarea = tarea;

        this.id         = new Date().getTime(); // 1243204809
        this.completado = false;
        this.creado     = Date();

    }
}
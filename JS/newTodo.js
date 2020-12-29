function Todo(todoItem, id){
    this.todo = todoItem;
    this.completed = false;
    this.id = id;

    this.finish = function (){
        this.completed = true;
    }
}
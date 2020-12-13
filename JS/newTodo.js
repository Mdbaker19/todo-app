function Todo(todoItem, status){
    this.todo = todoItem;
    this.completed = status;

    this.finish = function (){
        this.completed = true;
    }
}
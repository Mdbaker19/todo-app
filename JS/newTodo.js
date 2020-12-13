function Todo(todoItem){
    this.todo = todoItem;
    this.completed = false;

    this.finish = function (){
        this.completed = true;
    }
}
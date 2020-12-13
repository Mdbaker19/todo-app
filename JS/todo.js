$(document).ready(function (){

    let count = 0;
    const darkMode = $("#dark");
    const lightMode = $("#light");

    lightMode.on("click", function (){
        darkLightMode();
    });
    darkMode.on("click", function (){
        darkLightMode();
    })

    function darkLightMode(){
        count++;
        if(count % 2 === 1) {
            $("body").css({
                "backgroundColor": "rgb(247 246 249)",
                "color": "rgb(85 86 113)"
            });
            $(".listItem").css("backgroundColor", "rgb(255 255 255)");
            $("#todoInput").css("backgroundColor", "rgb(255 255 255)");
            $("#listStatus").css("backgroundColor", "rgb(255 255 255)");
            $("#filterArea").css("backgroundColor", "rgb(255 255 255)");
            $("button").css("backgroundColor", "rgb(255 255 255)");
            $("#header").css("color", "rgb(251 242 255)");
            darkMode.css("background", "none");
            lightMode.hide();
            darkMode.show();
        } else {
            $("body").css({
                "backgroundColor": "rgb(22 23 34)",
                "color": "rgb(251 242 255)"
            });
            $(".listItem").css("backgroundColor", "rgb(37 40 60)");
            $("#todoInput").css("backgroundColor", "rgb(37 40 60)");
            $("#listStatus").css("backgroundColor", "rgb(37 40 60)");
            $("#filterArea").css("backgroundColor", "rgb(37 40 60)");
            $("button").css("backgroundColor", "rgb(37 40 60)");
            $("#header").css("color", "rgb(251 242 255)");
            lightMode.css("background", "none");
            darkMode.hide();
            lightMode.show();
        }
    }



    function renderTodo(obj){
        return `<div class="listItem">
                    <button class="finishTodo">O</button>
                    <p class="todoName text">obj.todo</p>
                    <button class="delete">X</button>
                </div>`
    }

    $("#add").on("click", function (){
       let todo = new Todo($("#todoInput").val());
        renderTodo(todo);
    });

});
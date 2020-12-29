$(document).ready(function (){

    let listArea = document.getElementById("listArea");
    const darkMode = $("#dark");
    const lightMode = $("#light");
    let count = 0;
    let todoID = listArea.children.length;
    $("#count").text(todoID);
    const body = $("body");

    lightMode.on("click", function (){
        darkLightMode();
    });
    darkMode.on("click", function (){
        darkLightMode();
    })

    function darkLightMode(){
        count++;
        if(count % 2 === 1) {
            body.css({
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
            body.css({
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

    body.on("click", ".finishTodo", function (){
       $(this).css("color", "rgb(250 241 255)");
       $(this).text("[x]");
    });

    function renderTodo(obj){
        return `<div class="listItem">
                    <button class="finishTodo listButton">[ ]</button>
                    <p class="todoName text">${obj.todo}</p>
                    <button class="delete listButton">Delete</button>
                    <p id="hiddenId">${obj.id}</p>
                </div>`
    }

    $("#add").on("click", function (){
        let text = $("#todoInput");
        if(text.val().length > 0){
            let todo = new Todo(text.val(), todoID);
            todoID++;
            listArea.insertAdjacentHTML("afterbegin", renderTodo(todo));
            text.val("");
            $("#count").text(todoID);
        }
    });

    body.on("click", ".delete", function (){
       $(this).parent().remove();
       todoID--;
       $("#count").text(todoID);
    });

});
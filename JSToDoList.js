window.setTimeout(function() {
    var todos = ["Get rich"];

    var input = prompt("What would you like to do?")

    while(input !== "quit"){
        // handle input
        if(input === "list") {
            printList();
        } else if(input === "new") {
            addTodo();
        } else if(input === "delete") {
            deleteTodo();
        }
        // ask again for new input
        input = prompt("What would you like to do?")
    }
    console.log("Okay, you quit the app.")


    function printList(){
        console.log("*********");
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("*********");
    }

    function addTodo(){
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log(newTodo + " added new Todo Item");
    }

    function deleteTodo(){
        var index = prompt("Enter the index of todo to delete")
        todos.splice(index, 1);
        console.log("Deleted item from Todo List")
    }
}, 500);

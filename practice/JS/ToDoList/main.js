addBtn.addEventListener("click", addTodoItem, false);

var todoItems = [];

function addTodoItem() {
    if (todoitem.value.length < 1) {
        return;
    }
    if (!todoItems.includes(todoitem.value)) {
        var newTodoItem = document.createElement("li");
        newTodoItem.setAttribute("class", "list-item");
        newTodoItem.innerText = todoitem.value;

        ////////////////////////////////////////////////////////////////////

        var newItemDone = document.createElement("span");
        newItemDone.setAttribute("class", "fa fa-check-square");
        newItemDone.setAttribute("id", "doneListItem")


        var newDeleteItem = document.createElement("span");
        newDeleteItem.setAttribute("class", "fa fa-window-close")
        newDeleteItem.setAttribute("id", "deleteListItem")

        list.appendChild(newTodoItem);
        todoItems.push(todoitem.value);
        newTodoItem.appendChild(newItemDone);
        newTodoItem.appendChild(newDeleteItem);
        todoitem.value = "";


        newItemDone.addEventListener('click', todoItemDone, false)

        newDeleteItem.addEventListener('click', todoItemRemove, false)
        ////////////////////////////////////////////////////////////////////
        function todoItemDone() {
            if (newTodoItem.style.textDecoration == "line-through") {
                newTodoItem.style.textDecoration = "";
            } else {
                newTodoItem.style.textDecoration = "line-through";
            }
        }

        function todoItemRemove() {
            if (confirm("Do you really want to remove the item?")) {
                list.removeChild(newTodoItem);
            }
        }

    }

}



function clearAll(e){
    array = document.getElementsByClassName("main-todo-table-tbody__td");
    while(array.length > 0){
        array[0].parentElement.remove();
    }
}

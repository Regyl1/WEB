function saveInfo(e){
    array = document.getElementsByClassName("main-todo-table-tbody__td");
    size = array.length;
    if (size == 0){
        alert("Todo list пуст");
        return;
    }
    textArray = [];
    for(let i = 0; i < size; i++){
        textArray[i] = array[i]['innerText'];
    }
    localStorage.setItem('textArray', JSON.stringify(textArray));    
}

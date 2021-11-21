function onSubmitFunc(){
    var keyBox = document.search.key;  
    var val = keyBox.value;

    const deleteBtn = document.createElement("BUTTON");
    deleteBtn.className = "main-todo-table-tbody__del-button";

    var img = document.createElement("img");
    img.src="Resources/TrashIcon.png";
    img.className = "main-todo-table-tbody__del-button-img";

    deleteBtn.appendChild(img);

    var newTr = document.createElement("tr");
    newTr.className = "main-todo-table-tbody__tr";

    var newTd = document.createElement("td");
    newTd.className = "main-todo-table-tbody__td";
    newTd.textContent = val;

    newTr.appendChild(newTd);
    newTr.appendChild(deleteBtn);
    
    var printBlock = document.getElementById("tbody-lab6");
    printBlock.appendChild(newTr);

    listenDeleteTodo(deleteBtn);
}
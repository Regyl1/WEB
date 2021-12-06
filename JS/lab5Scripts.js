
function saveChanges(){
    var array = document.getElementsByClassName("main-todo-table-tbody__td");
    var size = array.length;
    var tdInfo = [];
    for(let i = 0; i < size; i++){
        tdInfo[i] = array[i]['innerText'];
    }
    localStorage.setItem('tdInfo', JSON.stringify(tdInfo)); 
}

window.addEventListener('load',() => {
    var tdInfo = JSON.parse(localStorage.getItem('tdInfo'));
    clearAll();
    for(let i = 0; i < tdInfo.length; i++){
        val = tdInfo[i];

        const tmpElem = document.getElementById("main-todo-table-tbody__tmpl");
        var clone = tmpElem.content.cloneNode(true);
        clone.querySelectorAll("td")[0].textContent = val;

        var printBlock = document.getElementById("tbody-lab5");
        printBlock.appendChild(clone);
    }
    saveChanges()
});



function onSubmitFunc(){
    var keyBox = document.search.key;  
    var val = keyBox.value;
    keyBox.value = "";
    if (val.length > 0){
        const tmpElem = document.getElementById("main-todo-table-tbody__tmpl");
        var clone = tmpElem.content.cloneNode(true);
        clone.querySelectorAll("td")[0].textContent = val;

        var printBlock = document.getElementById("tbody-lab5");
        printBlock.appendChild(clone);
    }
    saveChanges();
}

function saveInfo(){
    var array = document.getElementsByClassName("main-todo-table-tbody__td");
    var size = array.length;

    var textArray = [];
    for(let i = 0; i < size; i++){
        textArray[i] = array[i]['innerText'];
    }
    localStorage.setItem('textArray', JSON.stringify(textArray));    
}

function deleteTr(element){
    element.parentElement.parentElement.remove();
    saveChanges();
}

function loadInfo(){
    if (localStorage.getItem('textArray') != null){
        clearAll();
        var textArray = JSON.parse(localStorage.getItem('textArray'));
        
        for(let i = 0; i < textArray.length; i++){
            val = textArray[i];

            const tmpElem = document.getElementById("main-todo-table-tbody__tmpl");
            var clone = tmpElem.content.cloneNode(true);
            clone.querySelectorAll("td")[0].textContent = val;

            var printBlock = document.getElementById("tbody-lab5");
            printBlock.appendChild(clone);
        }
    }else{
        alert("Ничего не сохранено");
    }
    saveChanges();
}

function clearAll(){
    var array = document.getElementsByClassName("main-todo-table-tbody__td");
    while(array.length > 0){
        array[0].parentElement.remove();
    }
    saveChanges();
}

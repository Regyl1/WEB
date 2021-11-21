function listenDeleteTodo(element) {
    element.addEventListener("click", (event) => {
    element.parentElement.remove();
}); 
}  
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {

        if (localStorage.getItem("number") == 1){
            localStorage.setItem("number", 0);
        }
        else {
            localStorage.setItem("number", 1);
        }

        todos.filter(FilterFunc
            ).forEach(todo => {
            let tbody = document.getElementsByClassName('main-todo-table-tbody')[0];
            tbody.insertAdjacentHTML('beforeend',`
                <tr class="main-todo-table-tbody__tr">
                <td class="main-todo-table-tbody__td">${todo.userId}</td>
                <td class="main-todo-table-tbody__td">${todo.id}</td>
                <td class="main-todo-table-tbody__td">${todo.title}</td>
                <td class="main-todo-table-tbody__td">${todo.completed}</td>
                </tr>`);
        });
    })
    .then(()=>{
        document.getElementsByClassName('preloader')[0].className = "preloader hide";
        document.getElementsByClassName('main-todo-table')[0].className = "main-todo-table";
    })
    .catch(()=>{
        document.getElementsByClassName('preloader')[0].className = "preloader hide";
        document.getElementsByClassName('warning')[0].className = "warning block";
    })


function FilterFunc(i){
    let num = localStorage.getItem("number");
    if (num == 0) 
        return i.id <= 100
    else 
        return 100 < i.id && i.id <= 200
}
(function(){
    startTime = (new Date).getTime();
    window.addEventListener('load',function () {
        pageLoadTime="Page load time is " + (((new Date).getTime() - startTime) / 1000) + " Seconds";
        console.log(pageLoadTime);   

        var timeBlock = document.createElement("div");
        timeBlock.className = "load-time block";
        timeBlock.textContent = pageLoadTime;


        const deleteBtn = document.createElement("BUTTON");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent ='X';
        timeBlock.appendChild(deleteBtn);

        var printBlock = document.getElementsByClassName("header");
        printBlock[0].appendChild(timeBlock);
        

        deleteBtn.addEventListener("click", (event) => {
            deleteBtn.parentElement.remove();
        }); 
    });
})();
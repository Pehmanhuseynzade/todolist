const todoList = [];
let form = document.querySelector(".form");
let myinput = document.querySelector("#to-do")
let list = document.querySelector(".mylist")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    list.innerHTML+=`<li class="list-group-item" style = "display: flex;align-items: center;justify-content: space-between;">
    <span>${myinput.value}</span>
    <div>
    <button class="btn btn-warning done"><i class="done fa-solid fa-check"></i></button>
    <button class="btn btn-danger remove"><i class=" trash fa-solid fa-trash"></i></button>
    </div>
    
    </li>`
    myinput.value = ""

    
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (myinput.value === "") {
        let mytxt = document.querySelector(".text-danger");
        mytxt.classList.remove("d-none");
        return;
    }
})

list.forEach(todo => {
    const todoElement = document.createElement('li');
    todoElement.innerText = todo.value;
    if (todo.done) {
      todoElement.style.textDecoration = 'line-through';
    }
})






//keyup nan alindira bilmedim
// myinput.addEventListener("keyup",(e)=>{
//     preventDefault()
//     if(e.target.myinput.value.length === ""){
//         e.target.nextElementSibling.classList.replace("d-none","d-block");
//     }
// })
let list = document.querySelector("ul");
let ButtonAdd = document.getElementById("buttonAdd");

ButtonAdd.addEventListener("click", addTask);

function addTask(event){
    let TaskInput = document.getElementById("taskInput");
    let ValueInput = TaskInput.value;
    const ItemList = document.createElement("li");
    ItemList.innerText = ValueInput;
    const ButtonRemove = document.createElement("button");
    ButtonRemove.innerText = "Remove";
    ItemList.appendChild(ButtonRemove); 
    list.appendChild(ItemList);
};
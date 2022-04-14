let list = document.querySelector("ul");
const buttonAdd = document.getElementById("buttonAdd");
const taskInput = document.getElementById("taskInput");

buttonAdd.addEventListener("click", addTask);

function inputLength(){
    return taskInput.value.length;
};

function addTask(event){
    let valueInput = taskInput.value;
    const ItemList = document.createElement("li");
    ItemList.innerText = valueInput;

    const buttonRemove = document.createElement("button");
    buttonRemove.innerText = "X";
    ItemList.appendChild(buttonRemove); 

    buttonRemove.addEventListener("click", deleteTask);
    function deleteTask(){
        ItemList.classList.add("deleteTask");
    };

    ItemList.addEventListener("click", completeTask);
    function completeTask(){
        ItemList.classList.toggle("completeTask");
    };

    list.appendChild(ItemList);
    taskInput.value = "";
};
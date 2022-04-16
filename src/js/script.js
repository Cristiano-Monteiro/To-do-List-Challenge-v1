let list = document.querySelector("ul");
const buttonAdd = document.getElementById("buttonAdd");
const taskInput = document.getElementById("taskInput");

function inputLength(){
    return taskInput.value.trim().length;
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

buttonAdd.addEventListener("click", addAfterClick);

function addAfterClick(){
    const isNotEmpty = inputLength() != 0;
    if(isNotEmpty){
        addTask();
    };
};

taskInput.addEventListener("keypress", addAfterEnterPressed);

function addAfterEnterPressed(event){
    const isNotEmptyAndEnterPressed = inputLength() != 0 && event.which === 13;
    if(isNotEmptyAndEnterPressed){
        addTask();
    };
};
let list = document.querySelector("ul");
const buttonAdd = document.getElementById("buttonAdd");
const taskInput = document.getElementById("taskInput");
const buttonHelp = document.getElementById("help");
const divHelp = document.querySelector("div");

function idGenerator(){
    let id = Math.floor(Math.random() * 101);
    return id;
};

let allTasksSaved = [];

onload = function pageUpdate(){
    if (localStorage.getItem('savedTasks') != null){
        allTasksSaved = JSON.parse(localStorage.getItem('savedTasks'));

        let numberOfTasks = 0;
        while (numberOfTasks < allTasksSaved.length){
            let valueInput = allTasksSaved[numberOfTasks].taskValue;
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
    
            numberOfTasks += 1;
        };
    };
};

buttonHelp.addEventListener("click", buttonHelpClicked);

function buttonHelpClicked(){
    divHelp.classList.toggle("helpRemove");
};

function inputLength(){
    return taskInput.value.trim().length;
};

function addTask(event){
    let valueInput = taskInput.value;
    const ItemList = document.createElement("li");
    ItemList.innerText = valueInput;

    let idTask = 'IdTask' + idGenerator().toString();

    let eachTask = {
        taskValue: valueInput,
        idTask: idTask
    };

    allTasksSaved.push(eachTask);

    localStorage.setItem('savedTasks', JSON.stringify(allTasksSaved));

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
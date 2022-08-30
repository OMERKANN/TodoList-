
//Select All querySelectors

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const todoFilter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");



eventlisteners();

// All event Listeners

function eventlisteners(){

form.addEventListener("submit",addTodo);
document.addEventListener("DOMContentLoaded",loadAllTodosToUI);

}
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}
function addTodo(e){
   
 const newTodo = todoInput.value.trim();

   if(newTodo === ""){

    /*<div class="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
                      </div>*/
    showAlert("danger","please enter a todos");
   }
   else{
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success","do added successfully")
   }

    e.preventDefault();
}


function getTodosFromStorage(){ // Add Storage Todo

    let todos;

if(localStorage.getItem("todos") === null){
    todos = [];
}else{
    todos = JSON.parse(localStorage.getItem("todos"));
}
return todos;
}

function addTodoToStorage(newTodo){

let todos = getTodosFromStorage();

todos.push(newTodo);

localStorage.setItem("todos",JSON.stringify(todos));

}

function showAlert(type,message){
 const alert = document.createElement("div");

 alert.className = `alert alert-${type}`;

 alert.textContent = message; 

 firstCardBody.appendChild(alert);

 //set time out

 setTimeout (function(){
    alert.remove();
 },1000)

 
}

function addTodoToUI(newTodo){


    /*
    <!-- <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>-->
                        */


      //Create ListItem                   
    const listItem = document.createElement("li");

    // Create Link
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML =  "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between"
     
     // Add form ListItem TextBox and Link 
     listItem.appendChild(document.createTextNode(newTodo));
     listItem.appendChild(link);
  
     //add TodoList 

     todoList.appendChild(listItem);

    console.log(listItem)
}
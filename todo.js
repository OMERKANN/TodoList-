
//Select All querySelectors

const form = document.querySelector("#todo-form");
const todoInput =document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const fırstCardBody = document.querySelector(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const todoFilter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


eventlisteners();

// All event Listeners

function eventlisteners(){

form.addEventListener("submit",addTodo);

}

function addTodo(e){
   
 const newTodo = todoInput.value.trim();

  addTodoToUI(newTodo);



    e.preventDefault();
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



var taskinput=document.getElementById("newtask")
 var addtaskbutton = document.getElementById("add")
 varupdatetaskbutton = document.getElementById("update")
 var updateindex;
var taskcontainer = [];


function addtask( ){
    var taskinfo = taskinput.value
    if(taskinfo){
        taskcontainer.push(taskinfo)
        localStorage.setItem("usertaskarray",JSON.stringify(taskcontainer))
        console.log(taskcontainer);
        displaytask()
         taskinput.value=""
   
    }
    else{
        alert("task input cannot be empty")
    }
   
   
}

function displaytask(){
  var taskbox =``
    for(var i=0 ; i< taskcontainer.length;i++){
      taskbox +=`
       <tr class="fw-normal">
        <td>${i+1}</td>n 
        <td>
          <span>${taskcontainer[i]}</span>
        </td>
        <td>
          <button type="button" class="btn btn-warning" onclick="gettasktoupdate(${i})">update</button>
        
        </td>
        <td>
          <button type="button" class="btn btn-danger" onclick="deletetask(${i})">delete</button>
        </td>
      </tr>
      `


     
    }
    document.getElementById("tasks").innerHTML=taskbox;

    }


    
    function deletetask(index){
      taskcontainer.splice(index,1)
      displaytask()

    }
    
    function gettasktoupdate(){
      console.log(i);
      addtaskbutton.classList.add("d-none")
      updatetaskbutton.classList.remove("d-none")
      taskinput.value=taskcontainer[i]
      updateindex=i;

    }
    
    function updatetask(){
      addtaskbutton.classList.remove("d-none")
      updatetaskbutton.classList.add("d-none")

console.log(updateindex);
taskcontainer[updatedindex]=taskinput.value
displaytask()
taskinput.value=""
    }

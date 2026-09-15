let input = document.querySelector("input");
let button = document.querySelector("button");
let div = document.querySelector("ul");


function addtask()
{
    let task = document.createElement("li");
    let delbtn = document.createElement("button");
    let done = document.createElement("button");


    task.innerText = input.value;
    div.appendChild(task);
    
    delbtn.innerText = "delete";
    task.appendChild(delbtn);

     done.innerText = "done";
     done.style.backgroundColor="green";
    task.appendChild(done);
    input.value=" ";
}
button.addEventListener("click",()=>
{
    addtask();
})

input.addEventListener("keyup",(event)=>
{
    if(event.key=="Enter")
    {
         addtask();
    }
})

div.addEventListener("click", (event)=>{
   
if (event.target.innerText == "delete") {
    let del = event.target.parentElement;
    del.remove();
}

if (event.target.innerText == "done") {
  let complete= event.target.parentElement;
  complete.classList.toggle("complete")
}

})
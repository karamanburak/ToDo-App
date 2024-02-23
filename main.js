let totalList = [];
let totalTasks = 0;
let completedTasks = 0; 


window.addEventListener("load", () => {
  const totalSpan = document.querySelector("#total")
  const completedSpan = document.querySelector("#completed")
  console.log(completedSpan.textContent);
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const list = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Please enter your task");
      return;
    } else if (totalList.includes(input.value)){
      alert("This task is already registered please enter another task");
      return

    } else {
      totalList.push(input.value)
      
      totalTasks +=1
      totalSpan.textContent = totalTasks
      
    }
    
    const task_div = document.createElement("div");
    task_div.classList.add("task");
    list.appendChild(task_div);

    const task_content_div = document.createElement("div");
    task_content_div.classList.add("content");
    task_div.appendChild(task_content_div);

    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.type = "text";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly");
    task_content_div.appendChild(task_input);

    const task_actions_div = document.createElement("div");
    task_actions_div.classList.add("actions");
    task_div.appendChild(task_actions_div);

    const task_edit_button = document.createElement("button");
    task_edit_button.classList.add("Edit");
    task_edit_button.innerHTML = "Edit";

    const task_delete_button = document.createElement("button");
    task_delete_button.classList.add("Delete");
    task_delete_button.innerHTML = "Delete";

    const task_completed_button = document.createElement("button");
    task_completed_button.classList.add("Completed");
    task_completed_button.innerHTML = "Completed";

    task_actions_div.appendChild(task_edit_button);
    task_actions_div.appendChild(task_completed_button);
    task_actions_div.appendChild(task_delete_button);

    task_edit_button.addEventListener("click", () => {
      if (task_edit_button.innerText.toLowerCase() == "edit") {
        task_input.removeAttribute("readonly");
        task_input.focus();
        task_edit_button.innerText = "Save";
        task_input.style.textDecoration = "none";
      } else {
        task_input.setAttribute("readonly", "readonly");
        task_edit_button.innerText = "Edit";
      }
    });

    task_delete_button.addEventListener("click", (e) => {

        
      if (!task_completed_button.classList.contains("checked")) {
          e.target.parentElement.parentElement.remove()
            totalTasks--;
            
          }  else{
            e.target.parentElement.parentElement.remove()
             totalTasks--;
            completedTasks--;
          }
          totalSpan.textContent = totalTasks;
          completedSpan.textContent = completedTasks;
          
          
      })
   
    
    task_completed_button.addEventListener("click", () => {
      document.querySelectorAll(".Completed").forEach((a) => {
        (a.onclick = () => {

          if  (a.classList.contains("checked")){
            a.classList.remove("checked");
            task_input.style.textDecoration = "none";
          completedTasks -= 1;

          }else {
            a.classList.add("checked")
            task_input.style.textDecoration = "line-through";
          completedTasks += 1;

        }
        completedSpan.textContent = completedTasks;
          
          
        })
      })
      // task_input.setAttribute("readonly", "readonly");
    });


    input.focus();
    input.value = "";

  });
});

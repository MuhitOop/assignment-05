document.getElementById("blogPage").addEventListener("click", () => {
  window.location.href = "blog.html";
});

// dom elements

const completeTaskNum = document.getElementById("completeTaskNumber");
const assignTaskNum = document.getElementById("assignedTaskNumber");
const completeBtn = document.querySelectorAll(".completeBtn");
const clearHistoryBtn = document.getElementById("clear-btn");
const historyContainer = document.getElementById("history-container");

console.log(completeBtn);

let assignTask = parseInt(assignTaskNum.innerText);
let completeTask = parseInt(completeTaskNum.innerText);

completeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    assignTask--;
    completeTask++;

    assignTaskNum.innerText = assignTask;
    completeTaskNum.innerText = completeTask;

    btn.classList.remove("bg-blue-500", "hover:bg-blue-600", "cursor-pointer");
    btn.classList.add("bg-gray-500", "line-through");
    btn.innerText = "Task Completed";

    btn.disabled = true;


    // Activity log 
    
    
  });
});




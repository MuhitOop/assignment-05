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
    btn.classList.add("bg-dis-color");

    btn.disabled = true;

    // Activity log
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });
    const taskCard = btn.closest(".p-6");
    const taskNameElement = taskCard.querySelector("h1");
    const taskName = taskNameElement.innerText;


    const historyMsgDiv = document.createElement("div");
    historyMsgDiv.className = "rounded-[8px] bg-primary-bg p-2.5 my-2";
    historyMsgDiv.innerHTML = `<p class="text-gray-500">You have Complete The ${taskName} at ${formattedTime}</p>`;

    historyContainer.appendChild(historyMsgDiv);

    window.alert("Board updated successfully");

    if (assignTask === 0) {
      window.alert("Congrats!! You have completed all the tasks");
    }
  });
});

clearHistoryBtn.addEventListener("click", () => {
  historyContainer.innerHTML = "";
});

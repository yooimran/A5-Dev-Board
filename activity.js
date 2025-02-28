
// Set today's date on page load
window.addEventListener("load", function () {
    const today = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    document.getElementById("dateDisplay").textContent = today.toLocaleDateString('en-US', options);
});



document.getElementById("themeButton").addEventListener("click", function () {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});




function setDeadline(elementId) {
    const today = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    document.getElementById(elementId).textContent = `Deadline: ${today.toLocaleDateString('en-US', options)}`;
}

window.addEventListener("load", function () {
    setDeadline("deadline");
    setDeadline("deadline2");
    setDeadline("deadline3");
    setDeadline("deadline4");
    setDeadline("deadline5");
    setDeadline("deadline6");
});

document.getElementById("themeButton").addEventListener("click", function () {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

document.getElementById("clearHistory").addEventListener("click", function () {
    document.querySelectorAll(".text-sm.text-gray-700.space-y-2 li").forEach(function (element) {
        element.textContent = "";
    });
});


function completeTask(buttonId, headerId, activityId) {
    document.getElementById(buttonId).addEventListener("click", function () {
        this.textContent = "Completed ✅";
        this.classList.remove("bg-purple-500");
        this.classList.add("bg-green-500");
        this.disabled = true;

        const taskName = document.getElementById(headerId).textContent;
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        document.getElementById(activityId).textContent = `✔You have completed task: ${taskName} completed on ${now.toLocaleDateString('en-US', options)}`;

        // Update completed-task and remain-task counts
        const completedTaskElement = document.getElementById("completed-task");
        const remainTaskElement = document.getElementById("remain-task");
        completedTaskElement.textContent = parseInt(completedTaskElement.textContent) + 1;
        remainTaskElement.textContent = parseInt(remainTaskElement.textContent) - 1;
         // Alert message
    alert("Board updated successfully");
    });
}

completeTask("completed-btn", "header1", "activity1");
completeTask("completed-btn2", "header2", "activity2");
completeTask("completed-btn3", "header3", "activity3");
completeTask("completed-btn4", "header4", "activity4");
completeTask("completed-btn5", "header5", "activity5");
completeTask("completed-btn6", "header6", "activity6");

document.getElementById("something-new").addEventListener("click", function () {
    window.location.href = "blog.html";
});


function addTask() {
    let inputtask = document.getElementById('taskInput');
    let taskinput = inputtask.value;

    if (taskinput === "") {
        return;
    }

    let element = document.createElement("label");
    element.className = "task";

    element.innerHTML = `
        <input type="checkbox">
        <span>${taskinput}</span>

    `;

    document.getElementById('taskList').appendChild(element);
}
function deleteChecked() {
    let tasks = document.querySelectorAll('.task');

    tasks.forEach(element => {
        let checkbox = element.querySelector('input'); 
        if (checkbox.checked) {
            element.remove(); 
        }
    });
}

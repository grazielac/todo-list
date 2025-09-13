let task = []; // empty array to store tasks

// grab all html elements to be used for later
const input = document.getElementById("text");
const button = document.getElementById("addButton");
const taskContainer = document.getElementById("taskContainer");

// when this button is clicked, run this function
button.addEventListener("click", function () {
  const inputValue = input.value; // holds what the user type

  if (inputValue.trim() !== "") { // removes whitespace from start and end
    task.push(inputValue); // add it to array

    const li = document.createElement("li"); 
    li.textContent = inputValue; // set list to whatever is the input

    const deleteBtn = document.createElement("button"); 
    deleteBtn.textContent = "❌"; // set button to x

    deleteBtn.addEventListener("click", () => {
      taskContainer.removeChild(li); // remove <li> inside <ul>
      task = task.filter(function (t) { // run loop through each array 
        return t !== inputValue;
      });
    });

    li.appendChild(deleteBtn); // add deleteBtn to <li>
    taskContainer.appendChild(li); // add <li> into the <ul>

    input.value = ""; // clear tasks
  }
});

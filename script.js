// Create an empty array to store tasks
let task = [];

// Grab HTML elements by their ID
const input = document.getElementById("one");           // The input box where the user types tasks
const button = document.getElementById("myButton");    // The button that adds a new task
const taskContainer = document.getElementById("taskContainer"); // The container (like <ul>) to hold task items

// Add event listener to input box to listen for the Enter key
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {    // Check if the pressed key is Enter
    button.click();               // Simulate a click on the button to add the task
  }
});

// Add event listener to button to handle adding tasks
button.addEventListener("click", function (event) {
  const inputValue = input.value; // Get the current value of the input box

  // Check if input is not empty or just spaces
  if (inputValue.trim() !== "") {
    task.push(inputValue);        // Add the task to the array

    const li = document.createElement("li"); // Create a new <li> element for the task

    li.textContent = inputValue;  // Set the text inside <li> to the input value

    // Create a delete button for this task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌"; // Set the button text to a cross symbol

    // Add click event to delete button
    deleteBtn.addEventListener("click", () => {
      taskContainer.removeChild(li);                     // Remove the task from the page
      task = task.filter((t) => t !== inputValue);      // Remove the task from the array
    });

    li.appendChild(deleteBtn);       // Add delete button inside the <li>
    taskContainer.appendChild(li);   // Add the <li> (with button) to the task container

    input.value = "";                // Clear the input box for the next task
    console.log(task);               // Log the array to check tasks
  }
});
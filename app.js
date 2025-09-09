let task = [];

const input = document.getElementById("one");
const button = document.getElementById("myButton");
const taskContainer = document.getElementById("taskContainer");

button.addEventListener("click", function (event) {
  // this codes listen for a click on the button.

  // get the value from the input box
  const inputValue = input.value;
  // input is my html element (the box i grabbed with getElementId)
  // .value is a property of that element. it holds what the user types inside the input box


  if (inputValue.trim() !== "") {
    // only runs if user actually typed something
    task.push(inputValue);

    // create a new <li>
    const li = document.createElement("li");
    li.textContent = inputValue; // put the typed text inside <li>

    // add the <li> to the <ul>
    taskContainer.appendChild(li);

    input.value = ""; // how does it know when to clear it?
    console.log(task);
  }

  // task - the array where i store my tasks
  // .push(inputValue) - add the new value to the end of the array

  // console.log(task); // shows the whole task array
  // console.log(inputValue); // show just what was typed this time
});

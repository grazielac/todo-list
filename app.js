let task = [];

const input = document.getElementById("one");
const button = document.getElementById("myButton");
const taskContainer = document.getElementsByTagName("ul");

button.addEventListener("click", function (event) {
  // this codes listen for a click on the button.
  document.getElementById("one");
  const inputValue = input.value; // why input.value
  console.log(inputValue);

  console.log(event);
});

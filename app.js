//? Selectors
const input = document.querySelector(".form-control");
const addList = document.querySelector(".btn-success");
const delList = document.querySelector(".btn-warning");
const delAll = document.querySelector(".btn-danger");
const list = document.querySelector(".secondarea");

//? addBtn event handler

addList.addEventListener("click", () => {
  if (!input.value) {
    alert("There is no any list to add");
  } else {
    const newDiv = document.createElement("div");
    list.appendChild(newDiv);
    newDiv.innerHTML = `${input.value}`;
  }
});

//? deleteBtn event handler

//? enter key and  del key event handler

//? onload event handler
window.addEventListener("load", () => {
  langInput.focus();
});

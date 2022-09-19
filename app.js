//? Selectors
const input = document.querySelector(".form-control");
const addList = document.querySelector(".btn-success");
const delList = document.querySelector(".btn-warning");
const delAll = document.querySelector(".btn-danger");
const area = document.querySelector(".secondarea");

//? Btn event handler

addList.addEventListener("click", () => {
  if (!input.value) {
    alert("There is no any list to add");
  } else {
    const newP = document.createElement("p");
    area.appendChild(newP);
    newP.innerHTML = `${input.value}`;
    newP.classList.add("notselect");
    input.value = "";
    input.focus();
    //? addBtn event handler
    newP.addEventListener("click", () => {
      if (newP.className == "notselect") {
        newP.classList.replace("notselect", "select");
      } else if (newP.className == "select") {
        newP.classList.replace("select", "notselect");
      }
    });
  }
});

//? deleteBtn event handler
delList.addEventListener("click", () => {
  const lists = document.querySelectorAll(".secondarea .select");
  lists.forEach((p) => {
    p.remove();
  });
});

//? deleteAllBtn event handler
delAll.addEventListener("click", () => {
  const lists = document.querySelectorAll(".secondarea p");
  lists.forEach((p) => {
    p.remove();
  });
});

//? onload event handler
window.addEventListener("load", () => {
  input.focus();
});

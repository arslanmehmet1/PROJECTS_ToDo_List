//? Selectors
const input = document.querySelector(".form-control");
const addList = document.querySelector(".btn-success");
const delList = document.querySelector(".btn-warning");
const delAll = document.querySelector(".btn-danger");
const area = document.querySelector(".secondarea");

//? addBtn event handler

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

    const lists = document.querySelectorAll(".secondarea p");
    lists.forEach((p) => {
      p.addEventListener("click", () => {
        if (p.className == "notselect") {
          p.classList.replace("notselect", "select");
        } else if (p.className == "select") {
          p.classList.replace("select", "notselect");
        }
      });
    });
  }
});

//? deleteBtn event handler

//? enter key and  del key event handler

//? onload event handler
// window.addEventListener("load", () => {
//   langInput.focus();
// });

// div.classList.remove("foo");
// div.classList.add("anotherclass");

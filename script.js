let ul = document.querySelector(".todo");
let newtodo = document.querySelector(".text");
let insert = document.querySelector(".chekbox1");
let countdisplay = document.querySelector(".counter");
let all = document.querySelector(".all");
let Active = document.querySelector(".Active");
let Compleated = document.querySelector(".Compleated");
let clearC = document.querySelector(".clearC");

let content = "";
let newli = "";
let cont = "";
let counter = 0;

function clearCompleted() {
  const items = document.querySelectorAll("ul li:not(:last-child)");

  items.forEach((item) => {
    if (item.classList.contains("done")) {
      item.classList.add("delete");
      item.style.display = "none";
    }
  });
}
function ALL() {
  const items = document.querySelectorAll("ul li:not(:last-child)");

  items.forEach((item) => {
    if (!item.classList.contains("delete")) item.style.display = "block";
  });
}

function completed() {
  const items = document.querySelectorAll("ul li:not(:last-child)");

  items.forEach((item) => {
    if (!item.classList.contains("done") || item.classList.contains("delete"))
      item.style.display = "none";
    else item.style.display = "block";
  });
}

function DisplayActive() {
  const items = document.querySelectorAll("ul li:not(:last-child)");

  items.forEach((item) => {
    if (item.classList.contains("done") || item.classList.contains("delete")) {
      item.style.display = "none";
    } else item.style.display = "block";
  });
}
function desplayCount() {
  countdisplay.innerHTML = counter + " items left";
}
function checkdone() {
  var todos = this.parentElement;
  todos.classList.toggle("done");
  if (todos.classList.contains("done")) counter--;
  else counter++;
  desplayCount();
}
function deleteTodo() {
  this.parentElement.classList.add("delete");
  if (!this.parentElement.classList.contains("done")) counter--;
  desplayCount();
}
function creatCross() {
  image.src = "./images/icon-cross.svg";
  image.classList.add("deleteBtn");
  image.addEventListener("click", deleteTodo);
}
function creatTodo(todocontent) {
  counter++;
  newli = document.createElement("li");
  cont = document.createTextNode(todocontent);
  image = document.createElement("img");
  creatCross();
  rad = document.createElement("input");
  rad.type = "checkbox";

  newli.append(cont);
  newli.prepend(rad);
  newli.append(image);
  ul.prepend(newli);
  rad.addEventListener("click", checkdone);
  desplayCount();
}

function reset() {
  newtodo.value = "";
  insert.checked = false;
}
insert.addEventListener("click", function (event) {
  content = newtodo.value;
  if (content !== "") {
    creatTodo(content);
    setTimeout(reset, 300);
  }
});

clearC.addEventListener("click", clearCompleted);
all.addEventListener("click", ALL);
Compleated.addEventListener("click", completed);
Active.addEventListener("click", DisplayActive);

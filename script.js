let ul = document.querySelector(".todo");
let newtodo = document.querySelector(".text");
let insert = document.querySelector (".addtodo");
let countdisplay = document.querySelector(".counter");
let all = document.querySelector(".all");
let Active = document.querySelector(".Active");
let Compleated = document.querySelector(".Compleated");
let clearC = document.querySelector(".clearC");
let allM = document.querySelector(".allM");
let ActiveM = document.querySelector(".ActiveM");
let CompleatedM = document.querySelector(".CompleatedM");

let content = "";
let newli = "";
let cont = "";
let counter = 0;
//gets the button by ID from your HTML element
const themeBtn = document.getElementById("theme-btn");
console.log(themeBtn);
//when you click that button
themeBtn.addEventListener("click", function () {
  console.log(themeBtn.src);
  if (themeBtn.src.includes("images/icon-moon.svg"))
    themeBtn.src = "images/icon-sun.svg";
  else themeBtn.src = "images/icon-moon.svg";
  toogletheme();
});

function toogletheme() {
  var theme = document.getElementsByTagName("link")[0];
  console.log(theme);
  if (theme.getAttribute("href") == "css/light.css") {
    theme.setAttribute("href", "css/dark.css");
  } else {
    theme.setAttribute("href", "css/light.css");
  }
}

function clearCompleted() {
  const items = document.querySelectorAll("ul li:not(:last-child)");
  items.forEach((item) => {
    if (item.classList.contains("done")) {
      item.remove();
    }
  });
}
function ALL() {
  const items = document.querySelectorAll("ul li:not(:last-child)");

  items.forEach((item) => {
    item.style.display = "flex";
  });
}

function completed() {
  const items = document.querySelectorAll("ul li:not(:last-child)");
  // const menu = document.querySelector(".action")
  items.forEach((item) => {
    if (!item.classList.contains("done")) item.style.display = "none";
    else item.style.display = "flex";
    if (item.classList.contains("actions")) item.style.display = "flex";
  });
}

function DisplayActive() {
  const items = document.querySelectorAll("ul li:not(:last-child)");

  items.forEach((item) => {
    if (item.classList.contains("done")) {
      item.style.display = "none";
    } else item.style.display = "flex";
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
  this.parentElement.remove();
  if (!this.parentElement.classList.contains("done")) counter--;
  desplayCount();
}
function creatCross() {
  image.src = "./images/icon-cross.svg";
  image.classList.add("deleteBtn");
  image.addEventListener("click", deleteTodo);
}
function creatCheck(){
  div.classList.toggle("togglediv");
  var todos = div.parentElement;
  todos.classList.toggle("done");
  if (todos.classList.contains("done")) counter--;
  else counter++;
  desplayCount();

}
function creatTodo(todocontent) {
  counter++;
  newli = document.createElement("li");
  cont = document.createTextNode(todocontent);
  image = document.createElement("img");
  creatCross();
  div = document.createElement("div");
  div.classList.add("checkdev");
  div.addEventListener("click",creatCheck);

  // rad = document.createElement("input");
  // rad.type = "checkbox";
  newli.classList.add("newlist");

  newli.append(cont);
  // newli.prepend(rad);
  newli.prepend(div);
    newli.append(image);

  ul.prepend(newli);
  // rad.addEventListener("click", checkdone);
  desplayCount();
}

function reset() {
  newtodo.value = "";
insert.classList.remove("togglediv");

}
insert.addEventListener("click", function (event) {
  content = newtodo.value;
  if (content !== "") {
    creatTodo(content);
      insert.classList.add("togglediv");

    setTimeout(reset, 500);
  }
});

clearC.addEventListener("click", clearCompleted);
all.addEventListener("click", ALL);
Compleated.addEventListener("click", completed);
Active.addEventListener("click", DisplayActive);
allM.addEventListener("click", ALL);
CompleatedM.addEventListener("click", completed);
ActiveM.addEventListener("click", DisplayActive);

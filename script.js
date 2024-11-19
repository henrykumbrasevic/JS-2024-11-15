// -------------------------1 uzd-------------------------
const div = document.createElement("div");
div.innerText = "Hello DOM!";
document.body.appendChild(div);
// -------------------------2 uzd-------------------------
div.style.cssText = "background: lightblue; color: darkblue; padding: 10px"
// -------------------------3 uzd-------------------------
const ul = document.createElement("ul");

document.body.appendChild(ul);

for (let i = 0; i < 5; i++) {
    const li = document.createElement("li");
    li.innerText = `item ${i+1}`
    ul.appendChild(li)
}
// -------------------------4 uzd-------------------------
const clickMe = document.createElement("button");
clickMe.innerText = "Click me";
document.body.appendChild(clickMe);

const buttonClicked = () => {
    console.log("Button Clicked!");
    }
clickMe.addEventListener("click", buttonClicked);
// -------------------------5 uzd-------------------------
const removeItem = document.createElement("button");
removeItem.innerText = "Remove Item";
document.body.appendChild(removeItem);

const itemRemoved = () => {
    const remov = ul.querySelector(":last-child")
    remov.remove()
    }
removeItem.addEventListener("click", itemRemoved);
// -------------------------6 uzd-------------------------
const input = document.createElement("input");
const addItem = document.createElement("button");
addItem.innerText = "Add Item";
document.body.appendChild(input);
document.body.appendChild(addItem);

const addingItem = () => {
    const num = document.querySelector("input").value
    for (let i = 0; i < num; i++){
        const li = document.createElement("li")
        li.innerText = `item ${i+6}`
        ul.appendChild(li)
    }
    input.value = ""
}
addItem.addEventListener("click", addingItem);
// -------------------------7 uzd-------------------------
const p = document.createElement("p")
const changeText = document.createElement("button")
changeText.innerText = "Change Text"
p.innerText = "placeholder text"
document.body.appendChild(p)
document.body.appendChild(changeText)

const textChanger = () => {
    p.innerText = "The text has been changed";
}
changeText.addEventListener("click", textChanger)
// ------------------------- 8 uzd-------------------------
const someDiv = document.createElement("div");
const toggleHighlight = document.createElement("button")

someDiv.innerText = "some Text"
toggleHighlight.innerText = "Toggle Highlight"
someDiv.classList.add("box")

document.body.appendChild(someDiv)
document.body.appendChild(toggleHighlight)

const changeProperties = () => {
    someDiv.classList.toggle("highlight");
}
toggleHighlight.addEventListener("click", changeProperties)
// ------------------------- 9 uzd-------------------------
const addRow = document.createElement("button");
addRow.innerText = "Add row";

const table = document.createElement("table");
const th = document.createElement("th")
const tr = document.createElement("tr")
const td = document.createElement("td")

th.innerText = "Name"

document.body.appendChild(addRow);
document.body.appendChild(table);
document.body.appendChild(tr);
document.body.appendChild(th);
document.body.appendChild(td);









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

}
removeItem.addEventListener("click", addingItem);





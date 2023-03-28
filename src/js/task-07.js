const input = document.querySelector("#font-size-control");
const output = document.querySelector("span#text");

output.style.fontSize = input.value + "px";

console.log(output.style.fontSize);

input.addEventListener("input", (e) => {
output.style.fontSize = e.currentTarget.value + "px";
})
let buttons = document.querySelectorAll(".js-create");
let add = document.querySelector(".js-container");

buttons.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        let text = element.innerHTML;
        text = lastWord(text);
        let newBlock = document.createElement("div")
        newBlock.classList.add("new-block");
        newBlock.innerHTML = text;
        // if (index === 0) {
        if (text === "Before") {
            add.prepend(newBlock);
        } else {
            add.appendChild(newBlock);
        }
    })
});

function lastWord(sentance) {
    let words = sentance.split(" ");
    return words[words.length - 1];
}
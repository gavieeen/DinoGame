let character = document.getElementById("character");
let block = document.getElementById("block");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

let checkDead = setInterval(function(){
    let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    // Adjust the condition to check if the character's bottom is too close to the block
    if (blockLeft < (characterLeft + 20) && blockLeft > (characterLeft) && characterBottom < 20) {
        alert("You LOSE!");
    }

}, 10);

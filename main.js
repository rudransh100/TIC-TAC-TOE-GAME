let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector(".reset_bttn");
let turnO = true;//O player turn

let new_button = document.querySelector(".new_bttn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");

const winpatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO == true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })

});
const disable_boxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }

};
const enable_boxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

};
const showWinner = (winner) => {
    message.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable_boxes();


};

const checkWinner = () => {
    
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {

                showWinner(pos1);
            }

        }

    }


};

const reset_game = () => {
    turnO = true;
    enable_boxes();
    msgContainer.classList.add("hide");

};

new_button.addEventListener("click", reset_game);
reset_button.addEventListener("click", reset_game);

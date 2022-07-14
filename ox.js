const scenetop = document.querySelector("#top");
const sceneend = document.querySelector("#end");
const judagdisplay = document.querySelector("#judgdisplay");
const again = document.querySelector("#again");
const display = document.querySelector("#display");
const start = document.querySelector('#start')
const attack = document.querySelector(".attack");
const attack2 = document.querySelector(".attack2");
let square =document.querySelectorAll(".square");
let board = Array(9);//三つ揃ったか判定のために使う
let winflag = true;//勝敗が決まったらfalseにしてゲーム終了
let count = 0;//偶数なら先手の手番奇数なら後手の手番

const win_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

init();
function init() {
    start.addEventListener('click', first, false);
}

function first() {

} 
function turn_action() {
    if (count % 2 == 0) {
        turn.textContent = "先攻の番です"
    } else {
        turn.textContent = "後攻の番です"
    }
    Judgment();
    count++;
}

// マスがクリックされた時の処理
function player() {
    for (let i = 0; i < square.length; i++) {
        square[i].onclick = () => {
            if (board[i] == undefined) {
                square[i].style.backgroundColor = "pink";
                board[i] = 1;
                turn_action();
                if (winflag) {
                    com();
                }
            }
        }
    }
}
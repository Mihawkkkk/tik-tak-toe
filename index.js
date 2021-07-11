let board = document.querySelector(".grid");
let squares = document.querySelectorAll(".main");
let reset = document.querySelector(".reset");
let turn = document.querySelector(".turn");
let over = document.querySelector(".over");
let winner = document.querySelector(".over span");
let swap = "X";
let gameOver = false;
let draw = true;
squares.forEach((one) => {
  one.id = "no";
  one.addEventListener("click", function () {
    if (one.id !== "no" || gameOver == true) return;
    if (swap === "o") {
      let i = document.createElement("i");
      i.classList.add("far");
      i.classList.add("fa-circle");
      i.classList.add("o");
      one.appendChild(i);
      swap = "x";
      one.id = "yes";
      one.setAttribute("data-statuss", "o");
      turn.innerHTML = "X";
    } else {
      let i = document.createElement("i");
      i.classList.add("fas");
      i.classList.add("fa-times");
      i.classList.add("x");
      one.appendChild(i);
      swap = "o";
      one.id = "yes";
      one.setAttribute("data-statuss", "x");
      turn.innerHTML = "O";
    }
    chekwin();
  });
});
function chekwin() {
  let all = [];
  squares.forEach((one) => {
    all.push(one.getAttribute("data-statuss"));
  });
  if (all[0] == all[1] && all[0] == all[2] && all[0] != null) {
    gameOver = true;
    showResult(all, 0);
  } else if (all[3] == all[4] && all[3] == all[5] && all[3] != null) {
    gameOver = true;
    showResult(all, 3);
  } else if (all[6] == all[7] && all[6] == all[8] && all[6] != null) {
    gameOver = true;
    showResult(all, 6);
  } else if (all[0] == all[3] && all[0] == all[6] && all[0] != null) {
    gameOver = true;
    showResult(all, 0);
  } else if (all[1] == all[4] && all[1] == all[7] && all[1] != null) {
    gameOver = true;
    showResult(all, 1);
  } else if (all[2] == all[5] && all[2] == all[8] && all[2] != null) {
    gameOver = true;
    showResult(all, 2);
  } else if (all[0] == all[4] && all[0] == all[8] && all[0] != null) {
    gameOver = true;
    showResult(all, 0);
  } else if (all[2] == all[4] && all[2] == all[6] && all[2] != null) {
    gameOver = true;
    showResult(all, 2);
  } else {
    draw = true;
    all.forEach((el) => {
      if (el == null) draw = false;
    });
    if (draw == true) {
      over.style.width = "100%";
      setTimeout(() => {
        winner.innerHTML = `It Is draw `;
      }, 400);
    }
  }
}
function showResult(all, n) {
  over.style.width = "100%";
  setTimeout(() => {
    winner.innerHTML = `player ${all[n]} wins`;
  }, 400);
}
over.addEventListener("click", function () {
  winner.innerHTML = ``;
  over.style.width = "0";
});
reset.addEventListener("click", function () {
  turn.innerHTML = "X";
  gameOver = false;
  squares.forEach((one) => {
    if (one.id == "yes") {
      let i = document.querySelector(".main i");
      one.removeChild(i);
      one.removeAttribute("data-statuss");
    }
    one.id = "no";
  });
});

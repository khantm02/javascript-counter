"strict";

let countLabel = document.querySelector("#counter");
let increaseBtn = document.querySelector(".increaseBtn");
let resetBtn = document.querySelector(".resetBtn");
let decreaseBtn = document.querySelector(".decreaseBtn");

console.log(increaseBtn, decreaseBtn, resetBtn, countLabel);
let counter = 0;

increaseBtn.addEventListener("click", function () {
    counter++
    countLabel.textContent = counter;
});

decreaseBtn.addEventListener("click", function () {
    counter--
    countLabel.textContent = counter;
});

resetBtn.addEventListener("click", function () {
    counter = 0;
    countLabel.textContent = counter;
});

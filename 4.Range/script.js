const input = document.getElementById("satisfaction");
const emoji = document.querySelector(".emoji");
const emojis = ["😭", "😔", "🙂", "😁", "😎"];

input.addEventListener("input", emojiValue);

function emojiValue(e) {
  console.log(e.target.value);
  emoji.textContent = `${emojis[e.target.value - 1]}`;
}

// function emojiValue(e) {
//   if (input.value == 1) {
//     emoji.textContent = "😭";
//   } else if (input.value == 2) {
//     emoji.textContent = "😔";
//   } else if (input.value == 3) {
//     emoji.textContent = "🙂";
//   } else if (input.value == 4) {
//     emoji.textContent = "😁";
//   } else if (input.value == 5) {
//     emoji.textContent = "😎";
//   }
// }

const copybtn = document.querySelector(".btn");
let copyAnimation = false;

copybtn.addEventListener("click", handleCopy);

function handleCopy(e) {
  navigator.clipboard.writeText(e.target.nextElementSibling.textContent);

  if (!copyAnimation) {
    copyAnimation = true;
    e.target.textContent = "Copié !";
  }

  setTimeout(() => {
    e.target.textContent = "Copier";
    copyAnimation = false;
  }, 1000);
}

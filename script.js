
const btnLike = document.querySelector(".btn-like");
const btnLikeTxt = document.querySelector(".btn-text-like");

const btnDisLike = document.querySelector(".btn-dislike");
const btnDisLikeTxt = document.querySelector(".btn-text-dislike");

btnLike.addEventListener("click", () => setActive(btnLike, "liked", btnLikeTxt, "Like"));
btnDisLike.addEventListener("click", () => setActive(btnDisLike, "disliked", btnDisLikeTxt, "Dislike"));

function setActive(button, activeClass, btnText, text) {
  button.classList.toggle(activeClass);
  chkText(btnText, text);
}

function chkText(btnText, text) {
  if (btnText.innerHTML === text) {
    btnText.innerHTML = text + "d";
  } else {
    btnText.innerHTML = text;
  }
}
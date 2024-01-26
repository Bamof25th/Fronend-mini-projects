const emojies = [
  "😘",
  "😘",
  "😒",
  "😒",
  "🤣",
  "🤣",
  "😊",
  "😊",
  "🤔",
  "🤔",
  "😉",
  "😉",
  "😡",
  "😡",
  "❤️",
  "❤️",
];

let shuf_emojis = emojies.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let i = 0; i < emojies.length; i++) {
  let box = document.createElement("div");

  box.className = "item";
  box.innerHTML = shuf_emojis[i];

  box.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ===
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          if (
            document.querySelectorAll(".boxMatch").length === emojies.length
          ) {
            alert("Good Job , Respect 9999x");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };

  document.querySelector(".game").appendChild(box);
}

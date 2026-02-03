const head = document.getElementById("header");

function game() {
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      const hey = document.createElement("div");
      hey.addEventListener("click", () => {
        hey.classList = "sky";
      });
      hey.classList = "sky";

      if (
        (i > 9 && j > 2 && j <= 4) ||
        (i > 8 && j > 18 && j <= 19) ||
        (i > 7 && j > 10 && j <= 12)
      ) {
        hey.classList = "tree";
      }

      if ((i == 8 && j > 2 && j <= 4) || (i == 9 && j > 1 && j <= 5)) {
        hey.classList = "leaves";
      }
      if (i === 15) {
        hey.classList = "grass";
      }
      if (i > 15) {
        hey.classList = "brown";
      }
      if (i > 20) {
        hey.classList = "earth";
      }
      head.appendChild(hey);
    }
  }
}

game();

function toolClick(x) {
  if (x.id === "pickaxe") {
    document.body.style.cursor = "URL(axe-cursor.png) 8 8, auto";
  }
}

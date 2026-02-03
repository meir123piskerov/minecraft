const head = document.getElementById("header");

function sky() {
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      const hey = document.createElement("div");
      hey.classList = "sky";
      head.appendChild(hey);
    }
  }
}

sky();

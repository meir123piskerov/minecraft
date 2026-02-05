const head = document.getElementById("header");
let tool = null;
let inventory = {
  wood: 0,
  leaves: 0,
  stone: 0,
  dirt: 0,
  grass: 0,
};
function game() {
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      const hey = document.createElement("div");
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
      hey.addEventListener("click", () => {
        console.log(tool);
        if (tool == "pickaxc" || tool == "axe" || tool == "shovel") {
          if (tool == "pickaxc" && hey.classList == "earth") {
            hey.classList = "sky";
            inventory.stone += 1;

            if (inventory.stone === 1) {
              const element = document.createElement("button");
              element.addEventListener("click", boxClick);
              element.className = "stone";
              element.style.backgroundImage = "url(../img/download.jpg)";
              element.style.marginTop = "20px";
              element.style.marginLeft = "20px";
              element.style.height = "100px";
              element.style.width = "100px";
              element.style.display = "flex";
              element.style.justifyContent = "center";
              element.style.alignItems = "center";
              element.style.fontSize = "30px";
              element.style.color = "white";
              inventory1.append(element);
            }
            if (inventory.stone >= 1) {
              const stone = document.querySelector(".stone");
              stone.innerText = inventory.stone;
            }
          }
          if (
            tool == "axe" &&
            (hey.classList == "tree" || hey.classList == "leaves")
          ) {
            if (hey.classList == "tree") {
              inventory.wood += 1;

              if (inventory.wood === 1) {
                const element = document.createElement("button");
                element.addEventListener("click", boxClick);
                element.className = "wood";
                element.style.backgroundImage = "url(../img/tree.png)";
                element.style.marginTop = "20px";
                element.style.marginLeft = "20px";
                element.style.height = "100px";
                element.style.width = "100px";
                element.style.display = "flex";
                element.style.justifyContent = "center";
                element.style.alignItems = "center";
                element.style.fontSize = "30px";
                element.style.color = "white";
                inventory1.append(element);
              }
              if (inventory.wood >= 1) {
                const wood = document.querySelector(".wood");
                wood.innerText = inventory.wood;
              }
            } else if (hey.classList == "leaves") {
              inventory.leaves += 1;
              if (inventory.leaves === 1) {
                const element = document.createElement("button");
                element.addEventListener("click", boxClick);
                element.className = "leaves1";
                element.style.backgroundImage = "url(../img/leaves.png)";
                element.style.marginTop = "20px";
                element.style.marginLeft = "20px";
                element.style.height = "100px";
                element.style.width = "100px";
                element.style.display = "flex";
                element.style.justifyContent = "center";
                element.style.alignItems = "center";
                element.style.fontSize = "30px";
                element.style.color = "white";
                inventory1.append(element);
              }
              if (inventory.leaves >= 1) {
                const leaves1 = document.querySelector(".leaves1");
                leaves1.innerText = inventory.leaves;
              }
            }
            hey.classList = "sky";
          }
          if (
            tool == "shovel" &&
            (hey.classList == "grass" || hey.classList == "brown")
          ) {
            if (hey.classList == "grass") {
              inventory.grass += 1;
              if (inventory.grass == 1) {
                const element = document.createElement("button");
                element.addEventListener("click", boxClick);
                element.className = "grass1";
                element.style.backgroundImage = "url(../img/grass.png)";
                element.style.marginTop = "20px";
                element.style.marginLeft = "20px";
                element.style.height = "100px";
                element.style.width = "100px";
                element.style.display = "flex";
                element.style.justifyContent = "center";
                element.style.alignItems = "center";
                element.style.fontSize = "30px";
                element.style.color = "white";

                inventory1.append(element);
              }
              if (inventory.grass >= 1) {
                const grass1 = document.querySelector(".grass1");
                grass1.innerText = inventory.grass;
              }
            } else if (hey.classList == "brown") {
              inventory.dirt += 1;
              if (inventory.dirt === 1) {
                const element = document.createElement("button");
                element.addEventListener("click", boxClick);
                element.className = "dirt1";
                element.style.backgroundImage = "url(../img/soil.png)";
                element.style.marginTop = "20px";
                element.style.marginLeft = "20px";
                element.style.height = "100px";
                element.style.width = "100px";
                element.style.display = "flex";
                element.style.justifyContent = "center";
                element.style.alignItems = "center";
                element.style.fontSize = "30px";
                element.style.color = "white";
                inventory1.append(element);
              }
              if (inventory.dirt >= 1) {
                const dirt1 = document.querySelector(".dirt1");
                dirt1.innerText = inventory.dirt;
              }
            }

            hey.classList = "sky";
          }
        } else if (
          tool == "dirt" ||
          tool == "grass" ||
          tool == "leaves" ||
          tool == "wood" ||
          tool == "stone"
        ) {
          if (tool == "dirt" && hey.classList == "sky") {
            if (inventory.dirt >= 1) {
              hey.classList = "brown";
              inventory.dirt -= 1;
              const dirt1 = document.querySelector(".dirt1");
              dirt1.innerText = inventory.dirt;
            } else if (inventory.dirt == 0) {
              const element = document.querySelector(".dirt1");
              element.remove();
              document.body.style.cursor = "auto";

              if (
                inventory.dirt === 0 &&
                inventory.grass === 0 &&
                inventory.leaves === 0 &&
                inventory.stone === 0 &&
                inventory.wood === 0
              ) {
                inventory1.style.display = "none";
              }
            }
          } else if (tool == "stone" && hey.classList == "sky") {
            if (inventory.stone >= 1) {
              hey.classList = "earth";
              inventory.stone -= 1;
              const stone = document.querySelector(".stone");
              stone.innerText = inventory.stone;
            } else if (inventory.stone < 1) {
              const element = document.querySelector(".stone");
              element.remove();
              document.body.style.cursor = "auto";
              if (
                inventory.dirt === 0 &&
                inventory.grass === 0 &&
                inventory.leaves === 0 &&
                inventory.stone === 0 &&
                inventory.wood === 0
              ) {
                inventory1.style.display = "none";
              }
            }
          } else if (tool == "grass" && hey.classList == "sky") {
            if (inventory.grass >= 1) {
              hey.classList = "grass";
              inventory.grass -= 1;
              const grass1 = document.querySelector(".grass1");
              grass1.innerText = inventory.grass;
            } else if (inventory.grass < 1) {
              const element = document.querySelector(".grass1");
              element.remove();
              document.body.style.cursor = "auto";
              if (
                inventory.dirt === 0 &&
                inventory.grass === 0 &&
                inventory.leaves === 0 &&
                inventory.stone === 0 &&
                inventory.wood === 0
              ) {
                inventory1.style.display = "none";
              }
            }
          } else if (tool == "wood" && hey.classList == "sky") {
            if (inventory.wood >= 1) {
              hey.classList = "tree";

              inventory.wood -= 1;
              const wood = document.querySelector(".wood");
              wood.innerText = inventory.wood;
            } else if (inventory.wood < 1) {
              const element = document.querySelector(".wood");
              element.remove();
              document.body.style.cursor = "auto";
              if (
                inventory.dirt === 0 &&
                inventory.grass === 0 &&
                inventory.leaves === 0 &&
                inventory.stone === 0 &&
                inventory.wood === 0
              ) {
                inventory1.style.display = "none";
              }
            }
          } else if (tool == "leaves" && hey.classList == "sky") {
            if (inventory.leaves >= 1) {
              hey.classList = "leaves";
              inventory.leaves -= 1;
              const leaves1 = document.querySelector(".leaves1");
              leaves1.innerText = inventory.leaves;
              console.log(inventory.leaves);
            } else if (inventory.leaves < 1) {
              const element = document.querySelector(".leaves1");
              element.remove();
              document.body.style.cursor = "auto";
              if (
                inventory.dirt === 0 &&
                inventory.grass === 0 &&
                inventory.leaves === 0 &&
                inventory.stone === 0 &&
                inventory.wood === 0
              ) {
                inventory1.style.display = "none";
              }
            }
          }
        }
      });
      head.appendChild(hey);
    }
  }
}

game();

function boxClick(element) {
  console.log("element in box click", element.currentTarget);

  if (element.currentTarget.classList.contains("dirt1")) {
    document.body.style.cursor = "URL(../img/soil.png) 8 8, auto";
    tool = "dirt";
  }
  if (element.currentTarget.classList.contains("grass1")) {
    document.body.style.cursor = "URL(../img/grass.png) 8 8, auto";
    tool = "grass";
  }
  if (element.currentTarget.classList.contains("leaves1")) {
    document.body.style.cursor = "URL(../img/leaves.png) 8 8, auto";
    tool = "leaves";
  }
  if (element.currentTarget.classList.contains("wood")) {
    document.body.style.cursor = "URL(../img/tree.png) 8 8, auto";
    tool = "wood";
  }
  if (element.currentTarget.classList.contains("stone")) {
    document.body.style.cursor = "URL(../img/download.jpg) 8 8, auto";
    tool = "stone";
  }
}

function toolClick(x) {
  if (x.id === "pickaxc") {
    document.body.style.cursor = "URL(../img/pickaxe-s.png) 8 8, auto";
    tool = "pickaxc";
  }
  if (x.id === "shovel") {
    document.body.style.cursor = "URL(../img/shovel-s.png) 8 8, auto";
    tool = "shovel";
  }
  if (x.id === "axe") {
    document.body.style.cursor = "URL(../img/axe-cursor.png) 8 8, auto";
    tool = "axe";
  }
  if (x.id === "sword") {
    document.body.style.cursor = "URL(../img/sword.ico) 8 8, auto";
    tool = "sword";
  }
}
let openIn = true;
let inventory1 = document.getElementById("inventory");
function gameInventory() {
  console.log(inventory);

  if (
    inventory.dirt === 0 &&
    inventory.grass === 0 &&
    inventory.leaves === 0 &&
    inventory.stone === 0 &&
    inventory.wood === 0
  ) {
    return;
  } else {
    if (openIn) {
      inventory1.style.display = "flex";
      openIn = false;
    } else {
      inventory1.style.display = "none";
      openIn = true;
    }
  }
}

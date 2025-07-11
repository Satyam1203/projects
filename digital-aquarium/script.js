const allFishTypes = ["https://png.pngtree.com/png-clipart/20250222/original/pngtree-small-fish-small-fish-cartoon-cute-cartoon-picture-image_3920714.png", "https://pngcore.com/files/preview/800x800/11695315407dxwdqrgmdoeiejmjgsfn0xjaoaqphxw0zh5tdwe9aziz6wtuv053wlnnojvuew8exsrau7ni6wiptyp9ukjym3nvoaruvkksqscr.png", "https://png.pngtree.com/png-clipart/20250417/original/pngtree-blue-little-fish-cartoon-image-png-image_20858183.png", "https://png.pngtree.com/recommend-works/png-clipart/20250624/ourmid/pngtree-little-blue-fish-baby-png-image_16574545.png"];

let fishCount = 1;
let currentView = "2D";
let selectedFishType = allFishTypes[0];

const aquariumContainer = document.querySelector(".container");
const fishContainer = document.getElementById("fishes");


function makeContainer3D() {
  if (currentView === "2D") {
    aquariumContainer.classList.add("container3d");
    currentView = "3D";
  } else {
    aquariumContainer.classList.remove("container3d");
    currentView = "2D";
  }
}

function addFish() {
  fishCount += 1;
  showFishes(fishCount);
}

function removeFish() {
  fishCount = Math.max(0, fishCount - 1);
  showFishes(fishCount);
}

function toggleFishType() {
  selectedFishType = allFishTypes[Math.floor(Math.random() * allFishTypes.length)];
  showFishes(fishCount, selectedFishType);
}

function showFishes(count = fishCount, fishUrl = selectedFishType) {
  const currentFish = fishContainer.querySelectorAll("img");

  // If more fish are needed, add them
  if (currentFish.length < count) {
    for (let i = currentFish.length; i < count; i++) {
      const img = document.createElement("img");
      img.src = fishUrl;
      img.style.top = `${Math.random() * 80}%`;
      fishContainer.appendChild(img);
    }
  }

  // If fewer fish are needed, remove extra fishes
  if (currentFish.length > count) {
    for (let i = count; i < currentFish.length; i++) {
      currentFish[i].remove();
    }
  }

  // Update fish type only if necessary
  for (let i = 0; i < fishContainer.children.length; i++) {
    const img = fishContainer.children[i];
    if (img.src !== fishUrl) {
      img.src = fishUrl;
    }
  }
}

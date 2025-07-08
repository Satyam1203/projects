const allFishTypes = ["https://png.pngtree.com/png-clipart/20250222/original/pngtree-small-fish-small-fish-cartoon-cute-cartoon-picture-image_3920714.png", "https://pngcore.com/files/preview/800x800/11695315407dxwdqrgmdoeiejmjgsfn0xjaoaqphxw0zh5tdwe9aziz6wtuv053wlnnojvuew8exsrau7ni6wiptyp9ukjym3nvoaruvkksqscr.png", "https://png.pngtree.com/png-clipart/20250417/original/pngtree-blue-little-fish-cartoon-image-png-image_20858183.png", "https://png.pngtree.com/recommend-works/png-clipart/20250624/ourmid/pngtree-little-blue-fish-baby-png-image_16574545.png"];

let fishCount = 1;
let selectedFishType = "https://png.pngtree.com/png-clipart/20250222/original/pngtree-small-fish-small-fish-cartoon-cute-cartoon-picture-image_3920714.png";

const aquariumContainer = document.querySelector(".container");
const fishContainer = document.getElementById("fishes");


function makeContainer3D() {
      aquariumContainer.classList.add("container3d");
  
}

function makeContainer2D() {
      aquariumContainer.classList.remove("container3d");
  
}

function addFish() {
  fishCount += 1;
  showFishes(fishCount);
}

function removeFish() {
  fishCount += 1;
  showFishes(fishCount);
}

function toggleFishType() {
  const fishType = allFishTypes[Math.floor(Math.random() * allFishTypes.length)];

  showFishes(fishCount, fishType);
}

function showFishes(count = fishCount, fishUrl = selectedFishType) {
  const fragment = document.createDocumentFragment();
  for(let i=0; i<count; i++) {
    const img = document.createElement("img");
    img.src = fishUrl;
    fragment.appendChild(img);
  }
  
  fishContainer.innerHTML = "";
  fishContainer.appendChild(fragment);
}

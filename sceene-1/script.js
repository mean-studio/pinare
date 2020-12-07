let selectedItem = "";
const audioLoop = document.querySelector("#au");
function setHoverImages(parent) {
  const g = Array.from(document.querySelectorAll(`#${parent}  g`));
  console.log(g);
  const descriptionImage = document.querySelector(
    `#${parent} #description-image`
  );
  g.forEach((item) => {
    item.onmouseover = () => {
      descriptionImage.style.backgroundImage = `url(img/${parent}/${item.id}.png)`;
      console.log(`img/${parent}/${item.id}.png`, descriptionImage.style);
    };
    item.onmouseout = () => {
      descriptionImage.style.backgroundImage = "unset";
    };
  });
}

let activeSceene = "scene-1";
function mouseOver({ target }) {
  target.src = `img/${target.getAttribute("src-over")}`;
}
function mouseOut({ target }) {
  target.src = `img/${target.getAttribute("src-out")}`;
}
function positionItems(top, left) {
  const ratio = window.innerWidth / 1920;
  console.log(ratio, window.innerWidth);
  let descriptionBox = document.querySelector(
    `#${activeSceene} #description-image`
  );
  console.log(descriptionBox);
  setHoverImages(activeSceene);
  descriptionBox.style.left = `${window.innerWidth * (top || 0.5)}px`;
  descriptionBox.style.top = `${window.innerHeight * (left || 0.58)}px`;
  descriptionBox.style.width = `${window.innerWidth * 0.3}px`;
  descriptionBox.style.height = `${window.innerHeight * 0.35}px`;
  let childNodes = Array.from(
    document.querySelectorAll(`#${activeSceene} img`)
  );
}

function play() {
  const myVideo = document.querySelector("#video1");
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "none";
  activeSceene = "scene-2a";
  myVideo.onended = (e) => {
    const sceene = document.querySelector(`#${activeSceene}`);
    sceene.style.display = "flex";
    sceene.style.justifyContent = "center";
  };
  myVideo.play();
}
function displayScene(scene) {
  document.querySelector(`#${activeSceene}`).style.display = "none";
  activeSceene = scene;
  document.querySelector(`#${activeSceene}`).style.display = "block";
}
function displayScene2b() {
  displayScene("scene-2b");
  positionItems(0.2, 0.1);
  setTimeout(() => {
    displayScene("scene-2c");
    const sceene = document.querySelector(`#${activeSceene}`);
    sceene.style.display = "flex";
    sceene.style.justifyContent = "center";
  }, 5000);
}
function displayScene3() {
  displayScene("scene-3");
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "grid";
}
function displayScene4() {
  displayScene("scene-4");
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "block";
  const player = document.querySelector(`.player`);
  player.classList = "player visible";
  let videoPlayer = document.querySelector("#videoPlayer");
  setTimeout(() => {
    audioLoop.pause();
    videoPlayer.play();
  }, 500);
  videoPlayer.onended = () => displayScene4b();
}
function displayScene4b() {
  const sceene = document.querySelector(`#scene-4b`);
  const parrentScene = document.querySelector(`#scene-4`);
  const nextScene = document.querySelector(`#scene-5`);
  parrentScene.style.display = "block";
  nextScene.style.display = "none";
  let videoPlayer = document.querySelector("#videoPlayer");
  sceene.style.display = "grid";
  videoPlayer.style.display = "none";
}
function rewindScene4() {
  let videoPlayer = document.querySelector("#videoPlayer");
  const sceene = document.querySelector(`#scene-4b`);
  sceene.style.display = "none";
  videoPlayer.style.display = "block";
  videoPlayer.currentTime = 0;
  videoPlayer.play();
}
function displayScene5() {
  const sceene = document.querySelector(`#scene-4`);
  let videoPlayer = document.querySelector("#video1");
  let source = videoPlayer.querySelector("source");
  source.src = "video/s4_5_transition.mp4";
  sceene.style.display = "none";
  videoPlayer.load();
  videoPlayer.play();
  videoPlayer.onended = () => {
    displayScene("scene-5");
  };
}
function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}
function pageLoaded() {
  positionItems();
  const paths = Array.from(document.querySelectorAll("path, polyline"));
  let i = 0;
  const glow = setInterval(() => {
    if (i === paths.length) {
      clearInterval(glow);
      //   document.querySelector(".glowing-circle").style.display = "block";
      paths[i - 1].classList.remove("hovered");
    } else {
      if (paths[i - 1]) paths[i - 1].classList.remove("hovered");
      paths[i].classList.add("hovered");
      i++;
    }
  }, 1000);
}

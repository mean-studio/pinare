let selectedItem = "";
const audioLoop = document.querySelector("#au");
function setHoverImages(parent) {
  const g = Array.from(document.querySelectorAll(`#${parent}  g`));
  const descriptionImage = document.querySelector(
    `#${parent} #description-image`
  );
  g.forEach((item) => {
    item.onmouseover = () => {
      descriptionImage.style.backgroundImage = `url(img/${parent}/${item.id}.png)`;
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
  let descriptionBox = document.querySelector(
    `#${activeSceene} #description-image`
  );
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
    // displayScene("scene-2c");
    const getStarted = document.querySelector(`#getStarted`);
    getStarted.style.display = "block";
    getStarted.style.position = "absolute";
    getStarted.style.margin = "unset";
    getStarted.style.right = "150px";
    getStarted.style.top = "10%";
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
function backToScene4() {
  const sceene = document.querySelector(`#scene-5`);
  sceene.style.display = "none";
  let videoPlayer = document.querySelector("#video1");
  let source = videoPlayer.querySelector("source");
  source.src = "video/s4_5_transition_r.mp4";
  videoPlayer.load();
  videoPlayer.play();
  videoPlayer.onended = () => displayScene4b();
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
    document.querySelector(`#scene-5`).style.display = "grid";
  };
}

function displayScene6() {
  displayScene("scene-6");
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "block";
  const player = document.querySelector(`#${activeSceene} .player`);
  player.classList = "player visible";
  let videoPlayer = sceene.querySelector(`#videoPlayer`);
  setTimeout(() => {
    videoPlayer.play();
  }, 500);
  videoPlayer.onended = () => displayScene6b();
}

function displayScene6b() {
  const sceene = document.querySelector(`#scene-6b`);
  const parentScene = document.querySelector(`#scene-6`);
  const nextScene = document.querySelector(`#scene-7`);
  parentScene.style.display = "block";
  nextScene.style.display = "none";
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  sceene.style.display = "grid";
  videoPlayer.style.display = "none";
}

function rewindScene6() {
  const parentScene = document.querySelector(`#scene-6`);
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  const sceene = document.querySelector(`#scene-6b`);
  sceene.style.display = "none";
  videoPlayer.style.display = "block";
  videoPlayer.currentTime = 0;
  videoPlayer.play();
}

function displayScene7() {
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "none";

  displayScene("scene-7");
  document.querySelector(`#${activeSceene}`).style.display = "grid";
}

function displayScene8() {
  displayScene("scene-8");
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "block";
  const player = document.querySelector(`#${activeSceene} .player`);
  player.classList = "player visible";
  let videoPlayer = sceene.querySelector(`#videoPlayer`);
  setTimeout(() => {
    videoPlayer.play();
  }, 500);
  videoPlayer.onended = () => displayScene8b();
}
function displayScene8b() {
  const sceene = document.querySelector(`#scene-8b`);
  const parentScene = document.querySelector(`#scene-8`);
  const nextScene = document.querySelector(`#scene-9`);
  parentScene.style.display = "block";
  nextScene.style.display = "none";
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  sceene.style.display = "grid";
  videoPlayer.style.display = "none";
}

function rewindScene8() {
  const parentScene = document.querySelector(`#scene-8`);
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  const sceene = document.querySelector(`#scene-8b`);
  sceene.style.display = "none";
  videoPlayer.style.display = "block";
  videoPlayer.currentTime = 0;
  videoPlayer.play();
}
function displayScene9() {
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "none";

  displayScene("scene-9");
  document.querySelector(`#${activeSceene}`).style.display = "grid";
}
function displayScene10() {
  displayScene("scene-10");
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "block";
  const player = document.querySelector(`#${activeSceene} .player`);
  player.classList = "player visible";
  let videoPlayer = sceene.querySelector(`#videoPlayer`);
  setTimeout(() => {
    videoPlayer.play();
  }, 500);
  videoPlayer.onended = () => displayScene10b();
}
function displayScene10b() {
  const sceene = document.querySelector(`#scene-10b`);
  const parentScene = document.querySelector(`#scene-10`);
  const nextScene = document.querySelector(`#scene-11`);
  parentScene.style.display = "block";
  nextScene.style.display = "none";
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  sceene.style.display = "grid";
  videoPlayer.style.display = "none";
}

function rewindScene10() {
  const parentScene = document.querySelector(`#scene-10`);
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  const sceene = document.querySelector(`#scene-10b`);
  sceene.style.display = "none";
  videoPlayer.style.display = "block";
  videoPlayer.currentTime = 0;
  videoPlayer.play();
}

function displayScene11() {
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "none";
  displayScene("scene-11");
  document.querySelector(`#${activeSceene}`).style.display = "grid";
}
function displayScene12() {
  displayScene("scene-12");
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "block";
  const player = document.querySelector(`#${activeSceene} .player`);
  player.classList = "player visible";
  let videoPlayer = sceene.querySelector(`#videoPlayer`);
  setTimeout(() => {
    audioLoop.pause();
    videoPlayer.play();
  }, 500);
  videoPlayer.onended = () => displayScene12b();
}
function displayScene12b() {
  const sceene = document.querySelector(`#scene-12b`);
  const parentScene = document.querySelector(`#scene-12`);
  const nextScene = document.querySelector(`#scene-13`);
  parentScene.style.display = "block";
  nextScene.style.display = "none";
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  sceene.style.display = "grid";
  videoPlayer.style.display = "none";
}

function displayScene13() {
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "none";
  displayScene("scene-13");
  document.querySelector(`#${activeSceene}`).style.display = "grid";
}
function displayScene14() {
  displayScene("scene-14");
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "block";
  const player = document.querySelector(`#${activeSceene} .player`);
  player.classList = "player visible";
  let videoPlayer = sceene.querySelector(`#videoPlayer`);
  setTimeout(() => {
    videoPlayer.play();
  }, 500);
  videoPlayer.onended = () => displayScene14b();
}
function displayScene14b() {
  const sceene = document.querySelector(`#scene-14b`);
  const parentScene = document.querySelector(`#scene-14`);
  const nextScene = document.querySelector(`#scene-15`);
  parentScene.style.display = "block";
  nextScene.style.display = "none";
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  sceene.style.display = "grid";
  videoPlayer.style.display = "none";
}

function rewindScene14() {
  const parentScene = document.querySelector(`#scene-14`);
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  const sceene = document.querySelector(`#scene-14b`);
  sceene.style.display = "none";
  videoPlayer.style.display = "block";
  videoPlayer.currentTime = 0;
  videoPlayer.play();
}

function displayScene15() {
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "none";
  displayScene("scene-15");
  document.querySelector(`#${activeSceene}`).style.display = "grid";
}
function displayScene16() {
  displayScene("scene-16");
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "block";
  const player = document.querySelector(`#${activeSceene} .player`);
  player.classList = "player visible";
  let videoPlayer = sceene.querySelector(`#videoPlayer`);
  setTimeout(() => {
    audioLoop.pause();
    videoPlayer.play();
  }, 500);
  videoPlayer.onended = () => displayScene16b();
}
function displayScene16b() {
  const sceene = document.querySelector(`#scene-16b`);
  const parentScene = document.querySelector(`#scene-16`);
  const nextScene = document.querySelector(`#scene-17`);
  parentScene.style.display = "block";
  nextScene.style.display = "none";
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  sceene.style.display = "grid";
  videoPlayer.style.display = "none";
}

function rewindScene16() {
  const parentScene = document.querySelector(`#scene-16`);
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  const sceene = document.querySelector(`#scene-16b`);
  sceene.style.display = "none";
  videoPlayer.style.display = "block";
  videoPlayer.currentTime = 0;
  videoPlayer.play();
}
function displayScene17() {
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "none";
  displayScene("scene-17");
  document.querySelector(`#${activeSceene}`).style.display = "grid";
}
function displayScene18() {
  displayScene("scene-18");
  const sceene = document.querySelector(`#${activeSceene}`);
  sceene.style.display = "block";
  const player = document.querySelector(`#${activeSceene} .player`);
  player.classList = "player visible";
  let videoPlayer = sceene.querySelector(`#videoPlayer`);
  setTimeout(() => {
    audioLoop.pause();
    videoPlayer.play();
  }, 500);
  videoPlayer.onended = () => displayScene18b();
}
function displayScene18b() {
  const sceene = document.querySelector(`#scene-18b`);
  const parentScene = document.querySelector(`#scene-18`);
  const nextScene = document.querySelector(`#scene-19`);
  parentScene.style.display = "block";
  // nextScene.style.display = "none";
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  sceene.style.display = "grid";
  videoPlayer.style.display = "none";
}
function displayScene19() {
  displayScene("scene-19");
}
function rewindScene18() {
  const parentScene = document.querySelector(`#scene-18`);
  let videoPlayer = parentScene.querySelector(`#videoPlayer`);
  const sceene = document.querySelector(`#scene-18b`);
  sceene.style.display = "none";
  videoPlayer.style.display = "block";
  videoPlayer.currentTime = 0;
  videoPlayer.play();
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
function toggleMusic() {
  let au = document.querySelector(`#au`);
  const playIcon = document.querySelector(`#play-sound`);
  const pauseIcon = document.querySelector(`#mute-sound`);
  if (au.paused) {
    au.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    au.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
}
function pageLoaded() {
  let currentScene = document.querySelector(`#scene-0`);
  document.querySelector(".glowing-circle").style.display = "block";
  let au = document.querySelector(`#au`);
  document.querySelector(`#toggle-music`).style.display = "grid";
  au.play();
  currentScene.style.display = "none";
  positionItems();
  const paths = Array.from(
    document.querySelectorAll("#scene-1 path, polyline")
  );
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

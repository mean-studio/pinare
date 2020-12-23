const bgVideo = document.querySelector("#bgVideo");
const bgVideoSrc = bgVideo.querySelector("source");
const bgImage = document.querySelector("#bgImage");
const player = document.querySelector(".player");
const videoPlayer = document.querySelector("#videoPlayer");
const videoSrc = videoPlayer.querySelector("source");
const scene = document.querySelector("#intro");
const outro = document.querySelector("#outro");
const outroPreviousButton = outro.querySelector("#previousButton");
const outroNextButton = outro.querySelector("#nextButton");
const completeButton = outro.querySelector("#completeButton");
const outroTitle = outro.querySelector(".title");
const titleScene = document.querySelector("#titleScene");
const sceneTitle = titleScene.querySelector(".title");
const previousButton = titleScene.querySelector("#previousButton");
const nextButton = titleScene.querySelector("#nextButton");
const lookAround = document.querySelector("#lookAround");
const overlay1 = document.querySelector("#overlay-1");
const overlay2 = document.querySelector("#overlay-2");
const getStarted = overlay2.querySelector("#getStarted");
const toggleMusicButton = document.querySelector("#toggle-music");
const finalScene = document.querySelector("#finalScene");
let au = document.querySelector(`#au`);
function showFirstScene() {
  scene.classList.add("visible");
}

function start() {
  scene.classList.remove("visible");
  setTimeout(() => {
    toggleMusicButton.style.opacity = "1";
    toggleMusic();
    displayScene1();
  }, 500);
}
function setHoverImages(parent) {
  const g = Array.from(parent.querySelectorAll(`g`));
  const descriptionImage = parent.querySelector(`#description-image`);
  g.forEach((item) => {
    item.onmouseover = () => {
      descriptionImage.style.backgroundImage = `url(img/overlay/${item.id}.png)`;
    };
    item.onmouseout = () => {
      descriptionImage.style.backgroundImage = "unset";
    };
  });
}

function displayScene1() {
  overlay1.style.display = "grid";
  glowOverlay(overlay1);
  setHoverImages(overlay1);
  positionDescriptionBox(overlay1, 0.5, 0.58);
}

function displayScene2() {
  overlay1.style.display = "none";
  bgVideo.play();
  bgVideo.onended = () => {
    lookAround.style.display = "grid";
    lookAround.style.top = "50%";
    lookAround.style.left = "50%";
    lookAround.style.margin = "0";
    lookAround.style.position = "absolute";
    lookAround.style.transform = "translate(-50%,-50%)";
    glowOverlay(overlay2);
  };
  currentScene = overlay2;
}

function haveLookAround() {
  overlay2.style.display = "grid";
  lookAround.style.display = "none";
  setTimeout(() => {
    getStarted.style.opacity = "1";
    getStarted.style.pointerEvents = "all";
    getStarted.style.top = "0";
    getStarted.style.right = "0";
    getStarted.style.margin = "50px 150px";
    getStarted.style.position = "absolute";
  }, 7000);
  setHoverImages(overlay2);
  positionDescriptionBox(overlay2, 0.2, 0.1);
}
function positionDescriptionBox(parent, top, left) {
  let descriptionBox = parent.querySelector(`#description-image`);
  descriptionBox.style.left = `${window.innerWidth * top}px`;
  descriptionBox.style.top = `${window.innerHeight * left}px`;
  descriptionBox.style.width = `${window.innerWidth * 0.3}px`;
  descriptionBox.style.height = `${window.innerHeight * 0.35}px`;
}
function glowOverlay(parent) {
  const paths = Array.from(parent.querySelectorAll(`path, polyline`));
  let i = 0;
  const glow = setInterval(() => {
    if (i === paths.length) {
      clearInterval(glow);
      paths[i - 1].classList.remove("hovered");
    } else {
      if (paths[i - 1]) paths[i - 1].classList.remove("hovered");
      paths[i].classList.add("hovered");
      i++;
    }
  }, 1000);
}

function toggleMusic() {
  const playIcon = document.querySelector(`#play-sound`);
  const pauseIcon = document.querySelector(`#mute-sound`);
  if (au.paused) {
    au.play();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  } else {
    au.pause();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  }
}
function displayScene(sceneName) {
  titleScene.classList.remove("visible");
  setTimeout(() => {
    player.classList.add("visible");
    outroTitle.innerHTML = scenes[sceneName].title;
    outroPreviousButton.onclick = scenes[sceneName].previous;
    outroNextButton.onclick = scenes[sceneName].next;
    videoSrc.src = `video/${scenes[sceneName].video}.mp4`;
    videoPlayer.load();
    restartVideo();
  }, 500);
}
function showOutro() {
  videoPlayer.style.display = "none";
  outro.style.display = "grid";
}
function restartVideo() {
  videoPlayer.currentTime = 0;
  videoPlayer.style.display = "grid";
  outro.style.display = "none";
  videoPlayer.play();
}
function displayTitle(sceneName) {
  player.classList.remove("visible");
  previousButton.onclick = scenes[sceneName].introPrevious;
  nextButton.onclick = scenes[sceneName].introNext;

  titleScene.classList.add("visible");
  sceneTitle.innerHTML = scenes[sceneName].title;
  hideCurrentScene();
}
function hideCurrentScene() {
  if (currentScene.classList.length === 0) {
    currentScene.style.display = "none";
  } else {
    currentScene.classList.remove("visible");
  }
}
function hidePlayer() {
  player.classList.remove("visible");
}
const scenes = {
  "scene-3": {
    title: "Preparing Equipment and Work Bench",
    video: "scene-4",
    next: () => {
      hidePlayer();
      bgVideoSrc.src = "video/s4_5_transition.mp4";
      bgVideo.load();
      bgVideo.play();
      bgVideo.onended = () => {
        displayTitle("scene-4");
      };
    },
    previous: () => displayTitle("scene-3"),
    introNext: () => displayScene("scene-3"),
    introPrevious: () => {
      console.log(this);
      titleScene.classList.remove("visible");
      overlay2.style.display = "grid";
      getStarted.style.display = "grid";
    },
  },
  "scene-4": {
    bgVideoForward: "s4_5_transition",
    bgVideoBackward: "s4_5_transition_r",
    title: "Cleaning Hands",
    video: "scene-6",
    next: () => displayTitle("scene-5"),
    previous: () => displayTitle("scene-4"),
    introNext: () => displayScene("scene-4"),
    introPrevious: () => {
      titleScene.classList.remove("visible");
      bgVideoSrc.src = "video/s4_5_transition_r.mp4";
      bgVideo.load();
      bgVideo.play();
      bgVideo.onended = () => {
        displayScene("scene-3");
      };
    },
  },

  "scene-5": {
    title: "Sterilizing Metal Inoculating Loop",
    video: "scene-8",
    next: () => {
      bgImage.classList.add("oVisible");
      displayTitle("scene-6");
    },
    previous: () => displayTitle("scene-5"),
    introNext: () => displayScene("scene-5"),
    introPrevious: () => displayScene("scene-4"),
  },
  "scene-6": {
    title: "Plate Labeling",
    video: "scene-10",
    next: () => displayTitle("scene-7"),
    previous: () => displayTitle("scene-6"),
    introNext: () => displayScene("scene-6"),
    introPrevious: () => {
      bgImage.classList.remove("oVisible");
      displayScene("scene-5");
    },
  },
  "scene-7": {
    title: "Broth to Plate Transfer",
    video: "scene-11",
    next: () => displayTitle("scene-8"),
    previous: () => displayTitle("scene-7"),
    introNext: () => displayScene("scene-7"),
    introPrevious: () => displayScene("scene-6"),
  },
  "scene-8": {
    title: "Plate to Plate Transfer",
    video: "scene-13",
    next: () => displayTitle("scene-9"),
    previous: () => displayTitle("scene-8"),
    introNext: () => displayScene("scene-8"),
    introPrevious: () => displayScene("scene-7"),
  },
  "scene-9": {
    title: "Broth to Broth Transfer",
    video: "scene-15",
    next: () => {
      displayTitle("scene-10");
      setTimeout(() => {
        showCompleteButton();
      }, 1000);
    },
    previous: () => displayTitle("scene-9"),
    introNext: () => displayScene("scene-9"),
    introPrevious: () => displayScene("scene-8"),
  },
  "scene-10": {
    title: "Cleaning Up",
    video: "scene-17",
    next: () => {},
    previous: () => {
      hideCompleteButton();
      displayTitle("scene-10");
    },
    introNext: () => displayScene("scene-10"),
    introPrevious: () => displayScene("scene-9"),
  },
};
function hideCompleteButton() {
  completeButton.style.display = "none";
  outroNextButton.style.display = "block";
}
function showCompleteButton() {
  outroNextButton.style.display = "none";
  completeButton.style.display = "block";
}
function displayFinalScene() {
  player.classList.remove("visible");
  setTimeout(() => {
    finalScene.style.display = "block";
  }, 500);
}

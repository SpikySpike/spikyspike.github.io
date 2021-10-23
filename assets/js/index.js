console.log(
  "%cWhat are you doing here? 🤨\n%cThere's nothing here, the website is the simplest,\ndon't waste your time looking at this!",
  "font-size: 400%; color: #7209b7; font-weight: bold;",
  "font-size: 200%; color: #5fe863; font-weight: normal;"
);

function backAudPlay() {
  const backAud = new Audio("https://spikyspike.github.io/");
  backAud.volume = 0.2;
  backAud.loop = true;
  backAud.play();
}

function playStopBack() {
  const backAudio = document.getElementById("backAudio");
  const playMute = document.getElementById("playMute");
  if (!backAudio.muted) {
    backAudio.muted = true;
    playMute.innerHTML = "Muted";
  } else {
    backAudio.muted = false;
    playMute.innerHTML = "Mute";
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    const backAudio = document.getElementById("backAudio");
    const playMute = document.getElementById("playMute");
    if (!backAudio.muted) {
      backAudio.muted = true;
      playMute.innerHTML = "Muted";
    } else {
      backAudio.muted = false;
      playMute.innerHTML = "Mute";
    }
  }
});

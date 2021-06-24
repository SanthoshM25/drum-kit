window.addEventListener("keyup", (e) => {
  const audio = document.querySelector(`audio[data-key=${e.code}]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
});

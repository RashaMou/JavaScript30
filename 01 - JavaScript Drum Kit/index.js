window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`)

  if (!audio) return; // so it doesn't return null when wrong key is pressed
  audio.currentTime = 0;
  audio.play();
  key.forEach(key => key.classList.add('playing'))
  window.addEventListener('transitionend', function(e) {
    key.forEach(key => key.classList.remove('playing'))
  })
})
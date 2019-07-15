class DrumKit {
  constructor (element) {
    this.element = element;
    window.addEventListener('keydown', this.drumHit.bind(this))
  }
  drumHit (keypress) {
    let audio = document.querySelector(`audio[data-key="${keypress.keyCode}"]`)
    let key = document.querySelectorAll(`.key[data-key="${keypress.keyCode}"]`)
    if (!audio) return; // so it doesn't return null when wrong key is pressed
    audio.currentTime = 0;
    audio.play();
    key.forEach(key => key.classList.add('playing'))
    window.addEventListener('transitionend', function(e) {
      key.forEach(key => key.classList.remove('playing'))
    })
  }
}

const drumKeys = document.querySelectorAll('.key');
drumKeys.forEach(key => new DrumKit());

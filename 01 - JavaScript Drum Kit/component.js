class DrumKit {
  constructor (element) {
    this.element = element;
    this.data = this.element.dataset.key;
    console.log(this.data);
    
    // grab reference to keys
    // add event listener
    // link the data-key from the keys to the data-key from the audio

  }
  drumSound () {
    // add class
    // 
  }

  keyEffect () {
    xxx.classList.add('.playing .sound')
  }


}

const drumKeys = document.querySelectorAll('.key');
drumKeys.forEach(key => new DrumKit());

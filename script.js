//select all the keys on the piano
const keys = document.querySelectorAll('.key');

//listeners
//add event listener to each key
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

//Handlers
//play the note associated with the key
function playNote(key) {
    //get the audio element associated with the key
  const noteAudio = document.getElementById(key.dataset.note);
  //rewind to the start
  noteAudio.currentTime = 0;
  //play the audio
  noteAudio.play();
  //add the active class to the key
  key.classList.add('active');

  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {

    // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }
  
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }


});
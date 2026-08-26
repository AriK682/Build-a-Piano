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

  //remove the active class when the audio is done playing
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}

//Adds the notes to your keyboard keys
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

//select all the white and black keys
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

//add event listener for keydown events
document.addEventListener('keydown', (e) => {

    // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }

  // Get the key that triggered the event
  const key = e.key;
  // Check if the key is in the list of white or black keys
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  // If the key is in the list of white keys, play the corresponding note
  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  // If the key is in the list of black keys, play the corresponding note
  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }


});
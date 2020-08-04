const div = document.getElementById('div');
const button = document.querySelector('button');
const note = document.getElementById('note');
const back = document.getElementById('back');

button.addEventListener('click', () => {
  if (note.style.display !== 'block') {
    back.classList.remove('div-animation-back');
    back.classList.add('div-animation');
    note.style.display = 'block';
  } else {
    back.classList.remove('div-animation');
    back.classList.add('div-animation-back');
    setTimeout(() => {
      note.style.display = 'none';
    }, 990);
  }
});

function isInputNumber(evt) {
  const ch = String.fromCharCode(evt.which);

  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}

// To show selected file name
document
  .querySelector('.custom-file-input')
  .addEventListener('change', function (e) {
    let fileName = document.getElementById('img').files[0].name;
    let nextSibling = e.target.nextElementSibling;
    nextSibling.innerText = fileName;
  });

//no letters in phone and doc inputs
const numdoc = document.getElementById('numdoc');
numdoc.addEventListener('keypress', isInputNumber);
const numtel = document.getElementById('numtel');
numtel.addEventListener('keypress', isInputNumber);

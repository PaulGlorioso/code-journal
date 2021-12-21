/* global data */
/* exported data */
// var title = document.querySelector('#title');
var photo = document.querySelector('#photourl');
// var notes = document.querySelector('#notes');
// var subBut = document.querySelector('.subbtn');
var holder = document.querySelector('.photoholder');
photo.addEventListener('input', function (event) {
  holder.setAttribute('src', photo.value);
});

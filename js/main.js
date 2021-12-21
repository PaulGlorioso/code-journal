/* global data */
/* exported data */
var title = document.querySelector('#title');
var photo = document.querySelector('#photourl');
var notes = document.querySelector('#notes');
var holder = document.querySelector('.photoholder');
var nextEntryId = 1;

photo.addEventListener('input', function (event) {
  holder.setAttribute('src', photo.value);
});

document.addEventListener('submit', function (event) {
  event.preventDefault();
  var form = document.querySelector('#form');
  var values = {};
  values.title = title.value;
  values.photo = photo.value;
  values.note = notes.value;
  values.entryId = nextEntryId;
  nextEntryId++;
  form.reset();
});

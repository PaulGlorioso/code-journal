/* global data */
/* exported data */
var title = document.querySelector('#title');
var photo = document.querySelector('#photourl');
var notes = document.querySelector('#notes');
var holder = document.querySelector('.photoholder');

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
  values.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(values);
  holder.setAttribute('src', '/images/placeholder-image-square.jpg');
  form.reset();
});

var formBtn = document.querySelector('.new-entry');
var counter = 1;
var entryForm = document.querySelector('.data');

function newEntryForm(event) {
  if (counter % 2) {
    entryForm.className = 'data';
  } else {
    entryForm.className = 'data hidden';
  }
}
formBtn.addEventListener('click', newEntryForm);

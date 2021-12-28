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
  if (data.editing !== null) {
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        data.entries[i].title = title.value;
        data.entries[i].photo = photo.value;
        data.entries[i].note = notes.value;
        var update = createEntry(data.entries[i]);
        var replace = document.getElementById(data.editing.entryId);
        replace.replaceWith(update);
      }
    }
  } else {
    values.entryId = data.nextEntryId;
    data.nextEntryId++;
    data.entries.unshift(values);
    var entryList = document.querySelector('#entry-list');
    var create = createEntry(values);
    entryList.prepend(create);
  }
  holder.setAttribute('src', '/images/placeholder-image-square.jpg');
  entryForm.className = 'data hidden';
  var noEntries = document.querySelector('.no-entries');
  noEntries.className = 'no-entries hidden';
  form.reset();
  data.editing = null;
});

// Showing the Entry Form
var formBtn = document.querySelector('.new-entry');
var counter1 = 1;
var entryForm = document.querySelector('.data');

function newEntryForm(event) {
  if (counter1 % 2) {
    entryForm.className = 'data';
    counter1 += 2;
  } else {
    entryForm.className = 'data hidden';
    counter1 += 2;
  }
}
formBtn.addEventListener('click', newEntryForm);

// If there are no entries
if (data.entries.length > 0) {
  var noEntries = document.querySelector('.no-entries');
  noEntries.className = 'no-entries hidden';
}

// Showing a new Entry to list
window.addEventListener('DOMContentLoaded', function (event) {
  var entryList = document.querySelector('#entry-list');
  for (var i = 0; i < data.entries.length; i++) {
    var create = createEntry(data.entries[i]);
    entryList.appendChild(create);
  }
});

function createEntry(values) {

  // <li class="entry-item">
  //   <div class="entry-photo column-2">
  //     <img src="https://cdna.artstation.com/p/assets/images/images/012/904/096/large/olivia-oltmanns-oliviaoltmanns-adapreview.jpg?1537117130" alt="Ada Lovelace">
  //   </div>
  //   <div class="column-2">
  //     <div class="entry-title">
  //       <h3 class="font-family-mukta">Ada Lovelace</h3>
  //     </div>
  //     <div class="entry-notes">
  //       <p class="font-family-mukta">Agusta Ada King, Countess of Lovelace was an English mathematician
  //         and writer, chiefly known for her work on Charles Babbage's proposed
  //         mechanical general-purpose computer, the Analytical Engine.
  //       </p>
  //       <p class="font-family-mukta">She was the first to recognize that the machine had applications
  //         beyond pure calculation, and to have published the first algorithm
  //         intended to be carried out by such a machine.
  //       </p>
  //     </div>
  //   </div>
  // </li>
  var $entry = document.createElement('li');
  $entry.setAttribute('class', 'entry-item');
  $entry.setAttribute('data-entry-id', values.entryId);
  $entry.setAttribute('id', values.entryId);
  var $entryPhoto = document.createElement('div');
  $entryPhoto.setAttribute('class', 'entry-photo column-2');

  var $img = document.createElement('img');
  $img.setAttribute('src', values.photo);
  $img.setAttribute('alt', values.title);

  var $columnText = document.createElement('div');
  $columnText.setAttribute('class', 'column-2');

  var $entryTitle = document.createElement('div');
  $entryTitle.setAttribute('class', 'entry-title');

  var $titleText = document.createElement('h3');
  $titleText.setAttribute('class', 'font-family-mukta');
  $titleText.textContent = values.title;

  var $editIcon = document.createElement('i');
  $editIcon.setAttribute('class', 'fas fa-pen');
  $editIcon.setAttribute('data-entry-id', values.entryId);

  var $entryNotes = document.createElement('div');
  $entryNotes.setAttribute('class', 'entry-notes');

  var $notesText = document.createElement('p');
  $notesText.setAttribute('class', 'font-family-mukta');
  $notesText.textContent = values.note;

  $entry.appendChild($entryPhoto);
  $entry.appendChild($columnText);
  $entryPhoto.appendChild($img);
  $columnText.appendChild($entryTitle);
  $columnText.appendChild($entryNotes);
  $entryTitle.appendChild($titleText);
  $entryTitle.appendChild($editIcon);
  $entryNotes.appendChild($notesText);
  return $entry;
}

// Editing an Entry
var $entryList = document.querySelector('#entry-list');
$entryList.addEventListener('click', function (event) {
  if (event.target.tagName === 'I') {
    var editBtn = event.target;
    newEntryForm();
    document.querySelector('.form-title').textContent = 'Edit Entry';
    var entryNum = editBtn.getAttribute('data-entry-id');
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === parseInt(entryNum)) {
        data.editing = data.entries[i];
      }
    }
    title.value = data.editing.title;
    photo.value = data.editing.photo;
    notes.value = data.editing.note;
    holder.setAttribute('src', data.editing.photo);
  }
});

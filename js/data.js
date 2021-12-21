/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var previousData = localStorage.getItem('code-data-storage');
var previousEntries = localStorage.getItem('code-entry-storage');
if (previousData !== null) {
  data = JSON.parse(previousData);
}
if (previousEntries !== null) {
  data.entries = JSON.parse(previousEntries);
}

window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  var entriesJSON = JSON.stringify(data.entries);
  var dataJSON = JSON.stringify(data);
  this.localStorage.setItem('code-data-storage', dataJSON);
  this.localStorage.setItem('code-entry-storage', entriesJSON);
});

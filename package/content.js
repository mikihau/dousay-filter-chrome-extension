chrome.storage.sync.get(stored => {
  if (stored.hasOwnProperty('filters')) {
    hideDousayItems(stored.filters);
  }
})

chrome.storage.onChanged.addListener(function (changes, areaName) {
  if (areaName == "sync" && changes.hasOwnProperty('filters')) {
    console.log("Filters changed; applying new filters: " + changes.filters.newValue);
    revealDousayItems();
    hideDousayItems(changes.filters.newValue);
  }
});

function hideDousayItems(filterValue) {
  var filters = filterValue.split(/\r\n|\r|\n/g).filter((value) => value.trim() !== '');
  console.log("Valid filters: " + filters);

  var streamItems = document.querySelectorAll("#statuses > div.stream-items > div");
  for (var i = 0; i < streamItems.length; i++) {
    for (var filter of filters) {
      if (streamItems[i].outerHTML.search(new RegExp(filter)) != -1) {
        console.log("Hiding Dousay matching filter " + filter + ": ");
        console.log(streamItems[i]);
        streamItems[i].style.display = "none";
        break;
      }
    }

  }
}

function revealDousayItems() {
  var streamItems = document.querySelectorAll("#statuses > div.stream-items > div");
  for (var i = 0; i < streamItems.length; i++) {
    streamItems[i].style.display = "block";
  }
}

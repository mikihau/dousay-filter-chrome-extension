//document.getElementById("dousayFilters").value = "";

document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let filters = e.target.children.dousayFilters.value;
        chrome.storage.sync.set({ 'filters': filters });
    })

    let dousayFilters = document.getElementById('dousayFilters');
    chrome.storage.sync.get(stored => {
        if (stored.hasOwnProperty('filters')) {
            dousayFilters.value = stored.filters;
        }
    })
}, false);

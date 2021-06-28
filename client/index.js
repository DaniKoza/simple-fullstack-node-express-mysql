document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
        .then(response => response.json())
        .then(data => loadHTMLTable(data['data']))
        .catch(err => err);
});

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');
    // let tableHTML = "";

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>"
    }
}
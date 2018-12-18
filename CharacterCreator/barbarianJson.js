
function barbarianJson() {
    var barbarian = [
        {
            "Level": "1",
            "Proficiency": "+2",
            "Features": "Rage, Unarmored Defense",
            "Rage": "2",
            "RageDamage": "+2"
        },
        {
            "Level": "2",
            "Proficiency": "+2",
            "Features": "Reckless Attack, Danger Sense",
            "Rage": "2",
            "RageDamage": "+2"
        },
        {
            "Level": "3",
            "Proficiency": "+2",
            "Features": "Primal Path",
            "Rage": "3",
            "RageDamage": "+2"
        }
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < barbarian.length; i++) {
        for (var key in barbarian[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < barbarian.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = barbarian[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
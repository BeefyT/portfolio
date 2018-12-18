






function monkJson() {
    var monk = [
        {
            "Level": "1",
            "Proficiency": "+2",
            "MartialArts":"1d4",
            "KiPoints":"-",
            "UnarmoredMovement":"-",
            "Features": "Unarmored Defense, Martial Arts"
            
        },
        {
            "Level": "2",
            "Proficiency": "+2",
            "MartialArts":"1d4",
            "KiPoints":"2",
            "UnarmoredMovement":"+10ft",
            "Features": "Ki, Unarmored Movement"
        },
        {
            "Level": "3",
            "Proficiency": "+2",
            "MartialArts":"1d4",
            "KiPoints":"3",
            "UnarmoredMovement":"+10ft",
            "Features": "Monastic Tradition, Deflect Missiles"
        }
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < monk.length; i++) {
        for (var key in monk[i]) {
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
    for (var i = 0; i < monk.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = monk[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
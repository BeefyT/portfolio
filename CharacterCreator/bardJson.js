
function bardJson() {
    var bard = [
        {
            "Level": "1",
            "Proficiency": "+2",
            "Features": "Spellcasting, Bardic Inspiration (1d6)",
            "Cantrips": "2",
            "SpellsKnown": "4"
            
        },
        {
            "Level": "2",
            "Proficiency": "+2",
            "Features": "jack of All Trades, Song of Rest (d6)",
            "Cantrips": "2",
            "SpellsKnown": "5"
        },
        {
            "Level": "3",
            "Proficiency": "+2",
            "Features": "Bard College, Expertise",
            "Cantrips": "2",
            "SpellsKnown": "6"
        }
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < bard.length; i++) {
        for (var key in bard[i]) {
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
    for (var i = 0; i < bard.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = bard[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
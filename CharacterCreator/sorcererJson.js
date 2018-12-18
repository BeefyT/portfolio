


function sorcererJson() {
    var sorcerer = [
        {
            "Level": "1",
            "Proficiency": "+2",
            "SorceryPoints":"-",
            "Features":"Spellcasting,Sorcerous Origin",
            "Cantrips":"4",
            "SpellsKnown":"2"
            
        },
        {
            "Level": "2",
            "Proficiency": "+2",
            "SorceryPoints":"2",
            "Features":"Font of Magic",
            "Cantrips":"4",
            "SpellsKnown":"3"
        },
        {
            "Level": "3",
            "Proficiency": "+2",
            "SorceryPoints":"3",
            "Features":"Metamagic",
            "Cantrips":"4",
            "SpellsKnown":"4"
        }
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < sorcerer.length; i++) {
        for (var key in sorcerer[i]) {
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
    for (var i = 0; i < sorcerer.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = sorcerer[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
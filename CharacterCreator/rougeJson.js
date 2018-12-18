


function rogueJson() {
    var rogue = [
        {
            "Level": "1",
            "Proficiency": "+2",
            "SneakAttack":"1D6",
            "Features":"Expertise, Sneak Attack, Thieves’ Cant"
            
        },
        {
            "Level": "2",
            "Proficiency": "+2",
            "SneakAttack":"1D6",
            "Features":"Cunning Action"
        },
        {
            "Level": "3",
            "Proficiency": "+2",
            "SneakAttack":"2D6",
            "Features":"Roguish Archetype"
        }
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < rogue.length; i++) {
        for (var key in rogue[i]) {
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
    for (var i = 0; i < rogue.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = rogue[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}


function addRow()
        {
            // get input values
            var intv = document.getElementById('intv').value;
             var lname = document.getElementById('lname').value;
              var hp = document.getElementById('hp').value;
              var ac = document.getElementById('ac').value;
              
              // get the html table
              // 0 = the first table
              var table = document.getElementsByTagName('table')[0];
              
              // add new empty row to the table
              // 0 = in the top 
              // table.rows.length = the end
              // table.rows.length/2+1 = the center
              var newRow = table.insertRow(table.rows.length/2+1);
              
              // add cells to the row
              var cel1 = newRow.insertCell(0);
              var cel2 = newRow.insertCell(1);
              var cel3 = newRow.insertCell(2);
              var cel4 = newRow.insertCell(3);
              
              // add values to the cells
              cel1.innerHTML = intv;
              cel2.innerHTML = lname;
              cel3.innerHTML = hp;
              cel4.innerHTML = ac;
        }

function d4(){
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("roll").innerHTML = x;
}

function d6(){
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("roll").innerHTML = x;
}

function d8(){
    var x = Math.floor((Math.random() * 8) + 1);
    document.getElementById("roll").innerHTML = x;
}

function d10(){
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("roll").innerHTML = x;
}

function d12(){
    var x = Math.floor((Math.random() * 12) + 1);
    document.getElementById("roll").innerHTML = x;
}

function d20(){
    var x = Math.floor((Math.random() * 20) + 1);
    document.getElementById("roll").innerHTML = x;
}

function d100(){
    var x = Math.floor((Math.random() * 100) + 1);
    document.getElementById("roll").innerHTML = x;
}
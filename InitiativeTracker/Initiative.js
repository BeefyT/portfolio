

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


//BUTTON MATH

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

//SORT TABLE

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
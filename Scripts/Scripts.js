// This script of sor sorting the tables by the table heads in alphabethical and/or numerical order

for (let table of document.querySelectorAll('table')) { // selecting the entire table
      for (let th of table.tHead.rows[0].cells) { // choosing to make something happen when clicking on the table headers
        th.onclick = function(){
          const tBody = table.tBodies[0]; // choosing all the rows and columns
          const rows = tBody.rows;
          for (let tr of rows) {
            Array.prototype.slice.call(rows) // cutting the table into individual rows
              .sort(function(tr1, tr2){
                const cellIndex = th.cellIndex;
                return tr1.cells[cellIndex].textContent.localeCompare(tr2.cells[cellIndex].textContent);
              })
              .forEach(function(tr){ // adding the rows in their new position and remiving them from the old one
                this.appendChild(this.removeChild(tr));
              }, tBody);
          }
        }
      }
    }
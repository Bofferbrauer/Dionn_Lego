for (let table of document.querySelectorAll('table')) {
      for (let th of table.tHead.rows[0].cells) {
        th.onclick = function(){
          const tBody = table.tBodies[0];
          const rows = tBody.rows;
          for (let tr of rows) {
            Array.prototype.slice.call(rows)
              .sort(function(tr1, tr2){
                const cellIndex = th.cellIndex;
                return tr1.cells[cellIndex].textContent.localeCompare(tr2.cells[cellIndex].textContent);
              })
              .forEach(function(tr){
                this.appendChild(this.removeChild(tr));
              }, tBody);
          }
        }
      }
    }
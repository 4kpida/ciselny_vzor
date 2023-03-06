function generateRows() {
    let n = document.getElementById("input-number").value;
    let rowsContainer = document.getElementById("rows-container");
    rowsContainer.innerHTML = "";

    for (let i = n; i > 0; i--) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += j+1;
      }
      let rowElement = document.createElement("p");
      rowElement.innerHTML = row;
      rowsContainer.appendChild(rowElement);
    }
}
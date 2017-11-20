let rumble_button = $("#rumble");

rumble_button.on("click", function () {
  sortTable();
  this.innerHTML = "Next Turn";
  $("#row-1").addClass("red");
  $("#rumble").addClass("alt");

  // this.addEventListener("click", function () {
  //   current_initiative = $(".red")[0];
  //   current_initiative.removeClass("red");
  //   current_initiative.next().addClass("red");
  // });
});

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = $("table")[0];
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = $("TR", table);
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = $("input[name='initiative']", rows[i])[0];
      y = $("input[name='initiative']", rows[i+1])[0];
      // Check if the two rows should switch place:
      if (parseInt(x.value) < parseInt(y.value)) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

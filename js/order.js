let rumble_button = $("#rumble");

rumble_button.on("click", function () {
  sortTable();
  this.innerHTML = "Next Turn";
  $("tbody")[0].children[0].classList.add("red");
  $("#rumble").addClass("alt");

  this.addEventListener("click", function () {
    current_initiative = $(".red");
    current_initiative[0].classList.remove("red");
    if (current_initiative.next().length == 0) {
      $("tbody")[0].children[0].classList.add("red");
    } else {
      current_initiative.next().addClass("red");
    }
  });
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

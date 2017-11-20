let rumble_button = $("#rumble");

rumble_button.one("click", function () {
  sortTable();
  removeFields();
  this.innerHTML = "Next Turn";
  $("tbody")[0].children[0].classList.add("red");
  $("#rumble").addClass("alt");

  $("input[name='total-hp']").on("blur", function () {
    calculate(this);
  });

  this.addEventListener("click", function () {
    current_initiative = $(".red");
    current_initiative[0].classList.remove("red");
    if (current_initiative.next().length == 0) {
      $("tbody")[0].children[0].classList.add("red");
      $("input[name='reaction']").each(function () {
        this.checked = true;
      });
    } else {
      current_initiative.next().addClass("red");
    }
  });
});

function removeFields() {
  cells = $("td");
  cells.each(function () {
    let cell_type = this.children[0].name;
    if (cell_type == "name" || cell_type == "initiative") {
      let value = this.children[0].value;
      let field = this.children[0];
      field.remove();
      this.innerHTML = value;
    }
  });
}

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

  $(".checkbox").on("click", function () {
    check_uncheck(this);
  });

  this.addEventListener("click", function () {
    current_initiative = $(".red");
    current_initiative[0].classList.remove("red");
    if (current_initiative.next().length == 0) {
      $("tbody")[0].children[0].classList.add("red");
      $(".reaction").each(function () {
        check(this);
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

function check_uncheck(checkbox) {
  classes = checkbox.classList;
  if (classes.contains("checked")) {
    uncheck(checkbox);
  } else {
    check(checkbox);
  }
}

function uncheck(checkbox) {
  classes = checkbox.classList;
  classes.remove("checked");
  checkbox.children[0].innerHTML = "NO"
}

function check(checkbox) {
  classes = checkbox.classList;
  classes.add("checked");
  checkbox.children[0].innerHTML = "YES"
}

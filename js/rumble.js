let rumble_button = $("#rumble");

rumble_button.on("click", function () {
  sortTable();
  // removeFields();
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
    } else {
      current_initiative.next().addClass("red");
    }
  });
});

function removeFields() {

}

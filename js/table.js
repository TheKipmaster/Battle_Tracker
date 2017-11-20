let new_row_button = document.querySelector("#new-row");

new_row_button.addEventListener("click", function () {

  let table = document.querySelector("tbody");
  let row = document.getElementById("1");
  let new_row = row.cloneNode(true);

  new_row.id = (table.children.length+1);
  $.each(new_row.children, function(i, td) {
    if (td.children[0].name == "concentration") {
      td.children[0].checked = false;
    } else if (td.children[0].name == "reaction") {
      td.children[0].checked = true;      
    } else {
      td.children[0].value = "";
    }
  });

  table.appendChild(new_row);
});

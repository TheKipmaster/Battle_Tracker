let table = $("tbody")[0];

table.addEventListener("dblclick", function(event) {
  if (table.children.length > 1) {
    event.target.parentNode.classList.add("fade-out");

    setTimeout(function() {
      event.target.parentNode.remove();
    }, 400);
  }
});

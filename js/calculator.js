function calculate(field) {
  let input = field.value;
  let parts = input.split(/\D/);

  if (parts.length > 1) {
    let result = parseInt(parts[0]) - parseInt(parts[1])
    field.value = result;
  }
}

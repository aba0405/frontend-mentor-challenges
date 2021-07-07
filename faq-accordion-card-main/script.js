const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    input.forEach((input) => {
      if (input.checked) {
        input.checked = false;
        e.target.checked = true;
      }
    });
  });
});

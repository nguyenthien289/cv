const saveButton = document.getElementById("save-pdf");

if (saveButton) {
  saveButton.addEventListener("click", () => {
    window.print();
  });
}

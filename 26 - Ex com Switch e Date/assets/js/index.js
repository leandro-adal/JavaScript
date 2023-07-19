const formData = document.querySelector(".titulo");
const data = new Date();
formData.innerHTML = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});

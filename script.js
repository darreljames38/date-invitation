const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.textContent = "BIHIS NA SUNDUIN NA KITA NGAYON";
});

noBtn.addEventListener("click", () => {
  response.textContent = "HAHAHHA PAKYU YES PA DIN YAN";
});

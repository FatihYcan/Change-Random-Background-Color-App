const bgDiv = document.querySelector(".bgDiv");
const btnOver = document.querySelector(".btn-over");
const btnClick = document.querySelector(".btn-click");
const colorText = document.querySelector("#colorText");
const colorInput = document.querySelector("#colorInput");

// Rastgele bir hex renk kodu üret
function getRandomHexColor() {
  const letters = "0123456789ABCDEF"; // Hex renk kodlarındaki karakterler
  let color = "#"; // Renk kodu # ile başlar
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // Rastgele bir karakter ekle
  }
  return color;
}

// Sayfa yüklendiğinde bir rastgele renk ayarla
const randomColor = getRandomHexColor();
bgDiv.style.backgroundColor = randomColor;
colorText.innerHTML = randomColor;
colorInput.value = randomColor;

// btnOver üzerine gelindiğinde rastgele renk değiştir
btnOver.onmouseover = function () {
  const randomColor = getRandomHexColor();
  bgDiv.style.backgroundColor = randomColor;
  colorText.innerHTML = randomColor;
  colorInput.value = randomColor;
};

// btnClick'e tıklandığında rastgele renk değiştir
btnClick.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bgDiv.style.backgroundColor = randomColor;
  colorText.innerHTML = randomColor;
  colorInput.value = randomColor;
});

// colorInput elementine renk seçimi yapıldıkça arka plan rengini güncelle
colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  bgDiv.style.backgroundColor = selectedColor;
  colorText.innerHTML = selectedColor;
});

// bgDiv elementine odaklanabilirlik ekle
bgDiv.setAttribute("tabindex", "0");

// bgDiv üzerinde keyup olayını dinle
bgDiv.addEventListener("keyup", (event) => {
  // Eğer basılan tuş Enter ise
  if (event.code === "Enter") {
    const randomColor = getRandomHexColor();
    bgDiv.style.backgroundColor = randomColor;
    colorText.innerHTML = randomColor;
    colorInput.value = randomColor;
  }
});

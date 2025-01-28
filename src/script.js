function scrollToSection() {
  const section = document.querySelector(".main");
  const offset = 200;
  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: sectionTop - offset,
    behavior: "smooth",
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const telefoneInput = document.getElementById("numero");
  telefoneInput.addEventListener("input", function (event) {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    event.target.value = value;
  });
});

const imageUrls = [
  "src/img/fav/logo.png",
  "src/img/logoText/Porsche_Schriftzug.svg",
  "src/img/icons/arrow_down_24dp.svg",
  "src/img/Porsche-911-GT3-RS (4).jpg",
  "https://driverannual.github.io/porschework/src/img/fav/logo.png",
];

imageUrls.forEach((url) => {
  const normalizedUrl = url.startsWith("/") ? url.slice(1) : url;
  new Image().src = normalizedUrl;
});

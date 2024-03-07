quote = document.querySelector("#hero-quote");
backgroundImage = document.querySelector(".hero-section");

images = ["hero-section", "hero-section1", "hero-section2"];

i = 1;
setInterval((e) => {
  if (i == images.length) {
    i = 0;
  }
  backgroundImage.classList = [];
  backgroundImage.classList.add(images[i]);
  i++;
}, 5000);

fetch('https://api.breakingbadquotes.xyz/v1/quotes')
  .then((response) => response.json())
  .then((data) => (quote.innerHTML = data[0].quote + " - " + data[0].author));
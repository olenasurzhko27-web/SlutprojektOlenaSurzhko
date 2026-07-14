const modal = document.getElementById("galleryModal");
const closeBtn = document.querySelector(".close");
const cards = document.querySelectorAll(".card");

const splide = new Splide("#image-carousel", {
  type: "loop",
  perPage: 1,
  arrows: true,
  pagination: true,
});

splide.mount();

cards.forEach(card => {
  card.addEventListener("click", () => {

    const gallery = JSON.parse(card.dataset.gallery);

    // очищаем старые слайды
    splide.remove(".splide__slide");

    // добавляем новые
    gallery.forEach(src => {
      splide.add(`
        <li class="splide__slide">
          <img src="${src}" style="width:100%; height:auto;">
        </li>
      `);
    });

    modal.classList.add("active");

    splide.refresh();
  });
});

// закрытие
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// клик по фону закрывает
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
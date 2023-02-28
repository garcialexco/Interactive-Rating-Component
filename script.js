const mainCard = document.querySelector(".main__card");
const cardResults = document.querySelector(".card__results");
const cardItems = document.querySelectorAll(".card__item");
const cardSubmit = document.querySelector(".card-submit__button");
const ratingsForm = document.getElementById("ratings__form");
const submitButton = document.getElementById("card__submit");
const ratingResult = document.getElementById("rating");

ratingsForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedRating = document.querySelector('input[name="rating"]:checked');
  ratingResult.innerText = selectedRating.value;

  cardResults.classList.remove("hidden");
});

cardSubmit.addEventListener("click", function () {
  cardResults.classList.remove("hidden");
  mainCard.classList.add("hidden");
});

cardItems.forEach((cardItem) => {
  cardItem.addEventListener("click", () => {
    rating.innerHTML = cardItem.innerHTML;
    cardItems.forEach((item) => {
      item.classList.remove("clicked");
    });
    cardItem.classList.add("clicked");
    cardItems.forEach((item) => {
      if (item === cardItem) {
        item.style.backgroundColor = "#959eac";
      } else {
        item.style.backgroundColor = "#363c44";
      }
    });
    cardItem.style.backgroundColor = "#959eac";
  });
  cardItem.addEventListener("mouseenter", () => {
    if (!cardItem.classList.contains("clicked")) {
      cardItem.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
  });
  cardItem.addEventListener("mouseleave", () => {
    if (!cardItem.classList.contains("clicked")) {
      cardItem.style.backgroundColor = "#363c44";
    }
  });
});

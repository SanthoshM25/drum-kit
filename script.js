const cards = document.querySelectorAll(".card");
const removeActiveCard = () => {
  const activeCard = document.querySelector(".active");
  activeCard.classList.remove("active");
};

const makeActiveCard = (card) => {
  removeActiveCard();
  card.classList.add("active");
};
cards.forEach((card) => {
  card.addEventListener("click", () => {
    makeActiveCard(card);
  });
});

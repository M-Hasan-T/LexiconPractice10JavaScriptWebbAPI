const buttonDeck = document.querySelector("#buttonDeck");
const resultDiv = document.querySelector("#deckT");

function getApi() {
  let fullUri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

  fetch(fullUri)
    .then((res) => res.json())
    .then((data) => {
      let imageUrl = data.cards[0].image;
      let imageElement = document.createElement("img");

      resultDiv.innerHTML = "";
      imageElement.setAttribute("src", imageUrl);
      resultDiv.appendChild(imageElement);
    })
    .catch((err) => console.log(err));
}

buttonDeck.addEventListener("click", getApi);

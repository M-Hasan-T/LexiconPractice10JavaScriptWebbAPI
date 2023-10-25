const inputTxt = document.querySelector("#inputText");
const buttonSearch = document.querySelector("#searchButton");
const textInfo = document.querySelector("#infoArea");

function getApi() {
  let apiUri = "https://www.swapi.tech/api/people/?name=";
  let fullUri = `${apiUri}${inputTxt.value}`;
  console.log(fullUri);

  fetch(fullUri)
    .then((res) => res.json())
    .then((data) => {
      let attributeChar = data.result[0].properties;

      // Extract height, mass, gender and hair_color and use them to build a string using template literals (backslashes).
      let textResult = `${attributeChar.name}\n\nHeight: ${attributeChar.height}\nMass: ${attributeChar.mass}\nGender: ${attributeChar.gender}\nHair Color: ${attributeChar.hair_color}`;

      textInfo.innerHTML = textResult;
    })
    .catch((err) => console.log(err));
}

buttonSearch.addEventListener("click", getApi);

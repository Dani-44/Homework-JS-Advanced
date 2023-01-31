let id = Math.floor(Math.random() * 82);
let BASE_URL = `https://swapi.dev/api/people/${id}`;

const appContainer = document.querySelector("#app");
const btn = document.querySelector("#btn");
btn.addEventListener("click", fetchDataFromAPI);

async function fetchDataFromAPI() {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    // console.log(data)
    fetchPeopleData(data)

id = Math.floor(Math.random() * 82);
BASE_URL = `https://swapi.dev/api/people/${id}`;
}

const characterName = document.createElement("h1");
let table = document.createElement("table");

function fetchPeopleData(starWarsCharacters) {
    characterName.innerText = "";
    table.innerHTML = "";
    characterName.innerText = starWarsCharacters.name
    appContainer.appendChild(characterName)

    let thead = document.createElement("thead");
    let thHeight = document.createElement("th");
    thHeight.innerText = "Height";
    thead.appendChild(thHeight);

    let thWeight = document.createElement("th");
    thWeight.innerText = "Weight";
    thead.appendChild(thWeight);

    let thEye = document.createElement("th");
    thEye.innerText = "Eye Color";
    thead.appendChild(thEye);

    let thHair = document.createElement("th");
    thHair.innerText = "Hair Color";
    thead.appendChild(thHair);
    table.appendChild(thead);

    let tr = document.createElement("tr");
    let tdHeight = document.createElement("td");
    tdHeight.innerText = starWarsCharacters.height
    tr.appendChild(tdHeight);

    let tdWeight = document.createElement("td")
    tdWeight.innerText = starWarsCharacters.mass
    tr.appendChild(tdWeight);

    let tdEye = document.createElement("td")
    tdEye.innerText = starWarsCharacters.eye_color
    tr.appendChild(tdEye);

    let tdHair = document.createElement("td")
    tdHair.innerText = starWarsCharacters.hair_color
    tr.appendChild(tdHair);

    table.appendChild(tr);
    appContainer.appendChild(table);
}

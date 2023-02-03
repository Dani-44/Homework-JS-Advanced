let BASE_URL = "https://swapi.dev/api/planets/?page=1";
let BASE_URL2 = "https://swapi.dev/api/planets/?page=2";

const appContainer = document.querySelector("#app");
const btn = document.querySelector("#btn");
btn.addEventListener("click",
    function () {
        fetchDataFromAPI(BASE_URL);
        nextPlanets();
    }
);


async function fetchDataFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    fetchPlanetData(data.results);
}

let table = document.createElement("table");

function fetchPlanetData(starWarsPlanets) {
    table.innerHTML = "";

    let thead = document.createElement("thead");
    let thPlanetName = document.createElement("th");
    thPlanetName.innerText = "Planet Name";
    thead.appendChild(thPlanetName);

    let thPopulation = document.createElement("th");
    thPopulation.innerText = "Population";
    thead.appendChild(thPopulation);

    let thClimate = document.createElement("th");
    thClimate.innerText = "Climate";
    thead.appendChild(thClimate);

    let thGravity = document.createElement("th");
    thGravity.innerText = "Gravity";
    thead.appendChild(thGravity);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");

    for (let planet of starWarsPlanets) {
        tbody.innerHTML += `
                            <td>${planet.name}</td> 
                            <td>${planet.population}</td>
                            <td>${planet.climate}</td>
                            <td>${planet.gravity}</td>`
    }
    table.appendChild(tbody);
    appContainer.appendChild(table);
}

function nextPlanets() {
    let nextPlanetsBtn = document.createElement("button");
    nextPlanetsBtn.classList.add("nextBtn")
    nextPlanetsBtn.innerText = "Next 10 planets";
    appContainer.innerHTML = "";
    appContainer.appendChild(nextPlanetsBtn);
    nextPlanetsBtn.addEventListener("click", function () {
        fetchDataFromAPI(BASE_URL2);
        previousPlanets();
    });
}

function previousPlanets() {
    let previousPlanetsBtn = document.createElement("button");
    previousPlanetsBtn.classList.add("previousBtn")
    previousPlanetsBtn.innerText = "Previous 10 planets";
    appContainer.innerHTML = "";
    appContainer.appendChild(previousPlanetsBtn);
    previousPlanetsBtn.addEventListener("click", function () {
        fetchDataFromAPI(BASE_URL);
        nextPlanets();
    });
}
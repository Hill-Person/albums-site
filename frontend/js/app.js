import { displayAlbumPage } from "./albumPage.js";

fetch("http://localhost:8080/albums/")
.then(res => res.json())
.then(albums => {
    displayHomePage(albums)
})


function displayHomePage(albums) {

const containerEl = document.querySelector(".container");

let mainElement = document.createElement("main-content")
mainElement.classList.add("main-content");

let headerEl = document.createElement("header");

const sectionEl = document.createElement("section");
sectionEl.classList.add("album-library");

let h1El = document.createElement("h1");
h1El.classList.add("main-header");
h1El.innerText = "Arnold's Dive In Drive In";

let albuminfoElement = document.createElement("div");
albuminfoElement.classList.add("albums-info-container");

let sectionElement = document.createElement("main");
sectionElement.classList.add("main-content");

let h2El = document.createElement("h2");
h2El.classList.add("artist-name");

let h2El2 = document.createElement("h2")
h2El2.classList.add("album-title");

headerEl.appendChild(h1El);
mainElement.appendChild(sectionEl);
containerEl.appendChild(headerEl);

albums.forEach(album => {

    let albuminfoElement = document.createElement("div");
    albuminfoElement.classList.add("albums-info-container");

    let mainElement = document.createElement("main");
    mainElement.classList.add("main-content")

    let sectionEl = document.createElement("section");
    sectionEl.classList.add("album-library");

    let artistnameh2El = document.createElement("h2");
    artistnameh2El.classList.add("artist-name")
    artistnameh2El.innerText = album.artist;

    let albumtitleh3el = document.createElement("h3");
    albumtitleh3el.classList.add("album-title");
    albumtitleh3el.innerText = album.name;

    let albumImageEl = document.createElement("img");
    albumImageEl.classList.add("album-image")
    albumImageEl.src = album.imgUrl;

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("album-description");
    descriptionEl.innerText = album.description;
    descriptionEl.innerText = " Album rating: " + album.albumRating;

    containerEl.appendChild(albuminfoElement);
    albuminfoElement.appendChild(mainElement);
    mainElement.appendChild(sectionEl);
    sectionEl.appendChild(artistnameh2El);
    sectionEl.appendChild(albumtitleh3el);
    sectionEl.appendChild(descriptionEl);
    sectionEl.appendChild(albumImageEl);


    albumtitleh3el.addEventListener("click", () => {
        clearChildren(containerEl)
        displayAlbumPage(album);
    });
});

}

function formatDuration(durationInSeconds){
    let minutes = Math.floor(durationInSeconds/60);
    let seconds = durationInSeconds%60;
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
// function needs fixed

function clearChildren(element){
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
};

export { clearChildren }
export { displayAlbumPage }
export { displayHomePage }
export { formatDuration }
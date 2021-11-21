import { displayAlbumPage } from "./albumPage.js";
import { displayAlbumCreation } from "./createAlbum.js";
import { displayAlbums } from "./displayAlbums.js";

const containerEl = document.querySelector(".container");
let mainElement = document.createElement("main-content")
mainElement.classList.add("main-content");

displayAlbums(mainElement);

displayAlbumCreation(containerEl);

function displayHomePage(albums) {

    clearChildren(mainElement);

    let headerEl = document.createElement("header");

    const sectionEl = document.createElement("section");
    sectionEl.classList.add("album-library");

    let albuminfoElement = document.createElement("div");
    albuminfoElement.classList.add("albums-info-container");

    let sectionElement = document.createElement("main");
    sectionElement.classList.add("main-content");

    let h2El = document.createElement("h2");
    h2El.classList.add("artist-name");

    let h2El2 = document.createElement("h2")
    h2El2.classList.add("album-title");

    mainElement.appendChild(sectionEl);
    containerEl.appendChild(headerEl);

    albums.forEach(album => {

        let albuminfoElement = document.createElement("div");
        albuminfoElement.classList.add("albums-info-container");

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

        let deleteAlbumButton = document.createElement("button");
        deleteAlbumButton.innerText = "Delete Album";
        deleteAlbumButton.classList.add("delete-button");

        containerEl.appendChild(albuminfoElement);
        albuminfoElement.appendChild(mainElement);
        mainElement.appendChild(sectionEl);
        sectionEl.appendChild(artistnameh2El);
        sectionEl.appendChild(albumtitleh3el);
        sectionEl.appendChild(descriptionEl);
        sectionEl.appendChild(albumImageEl);
        sectionEl.appendChild(deleteAlbumButton);

        let editAlbumbutton = document.createElement("button");
        editAlbumbutton.innerText = "Edit Album";
        editAlbumbutton.classList.add("edit-album");

        albumtitleh3el.addEventListener("click", () => {
            clearChildren(containerEl)
            displayAlbumPage(album, containerEl);
            console.log(album);
        });

        deleteAlbumButton.addEventListener("click", () => {
            fetch(`http://localhost:8080/albums/${album.id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(albums => {
                    clearChildren(sectionEl);
                    displayHomePage(albums)
                })
        });
    });
}

function formatDuration(durationInSeconds) {
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = durationInSeconds % 60;
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

export {
    clearChildren
}
export {
    displayAlbumPage
}
export {
    displayHomePage
}
export {
    formatDuration
}
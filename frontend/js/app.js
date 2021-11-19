import { displayAlbumPage } from "./albumPage.js";

fetch("http://localhost:8080/albums/")
.then(res => res.json())
.then(albums => {
    displayHomePage(albums)
})

const newAlbumDiv = document.createElement("div");
newAlbumDiv.classList.add("album-div");

const newAlbumName = document.createElement("input");
newAlbumName.type = "text";
newAlbumName.placeholder = "Enter Album Name";

const newAlbumDescription = document.createElement("input");
newAlbumDescription.type = "text";
newAlbumDescription.placeholder = "Enter Album Description"

const newAlbumArtist = document.createElement("input");
newAlbumArtist.type = "text";
newAlbumArtist.placeholder = "Enter Artist Name"

const newAlbumImageUrl = document.createElement("input");
newAlbumImageUrl.type = "input";
newAlbumImageUrl.placeholder = "Enter Album Image Url";

const newAlbumLabelName = document.createElement("input");
newAlbumLabelName.type = "text";
newAlbumLabelName.placeholder = "Enter Album Label Name"

const newAlbumRating = document.createElement("input");
newAlbumRating.type = "text";
newAlbumRating.placeholder = "Enter Album Rating x/10";

const submitNewAlbumButton = document.createElement("button");
submitNewAlbumButton.innerText = "Submit New Album";

let headerEl = document.createElement("header");

let h1El = document.createElement("h1");
h1El.classList.add("main-header");
h1El.innerText = "Arnold's Dive In Drive In";

headerEl.appendChild(h1El);
mainElement.appendChild(sectionEl);
containerEl.appendChild(headerEl);


containerEl.appendChild(newAlbumDiv);
newAlbumDiv.appendChild(newAlbumName);
newAlbumDiv.appendChild(newAlbumDescription);
newAlbumDiv.appendChild(newAlbumArtist);
newAlbumDiv.appendChild(newAlbumImageUrl);
newAlbumDiv.appendChild(newAlbumLabelName);
newAlbumDiv.appendChild(newAlbumRating);
newAlbumDiv.appendChild(submitNewAlbumButton);

function displayHomePage(albums) {

const containerEl = document.querySelector(".container");

const mainContainer = document.querySelector(".container");

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

// submit button shit below

const newAlbumDiv = document.createElement("div");
newAlbumDiv.classList.add("album-div");

const newAlbumName = document.createElement("input");
newAlbumName.type = "text";
newAlbumName.placeholder = "Enter Album Name";

const newAlbumDescription = document.createElement("input");
newAlbumDescription.type = "text";
newAlbumDescription.placeholder = "Enter Album Description"

const newAlbumArtist = document.createElement("input");
newAlbumArtist.type = "text";
newAlbumArtist.placeholder = "Enter Artist Name"

const newAlbumImageUrl = document.createElement("input");
newAlbumImageUrl.type = "input";
newAlbumImageUrl.placeholder = "Enter Album Image Url";

const newAlbumLabelName = document.createElement("input");
newAlbumLabelName.type = "text";
newAlbumLabelName.placeholder = "Enter Album Label Name"

const newAlbumRating = document.createElement("input");
newAlbumRating.type = "text";
newAlbumRating.placeholder = "Enter Album Rating x/10";

const submitNewAlbumButton = document.createElement("button");
submitNewAlbumButton.innerText = "Submit New Album";

submitNewAlbumButton.addEventListener("click", () => {

    const newAlbumJson = {
        "name": newAlbumName.value,
        "description": newAlbumDescription.value,
        "artist": newAlbumArtist.value,
        "imgUrl": newAlbumImageUrl.value,
        "label": newAlbumLabelName.value,
        "albumRating": newAlbumRating.value,
        "songs": []
    }
    fetch("http://localhost:8080/albums/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAlbumJson)
    })
    .then(res => res.json())
    .then( albums => {
        clearChildren(mainContainer)
        displayHomePage(albums)
    })
    .catch(error => console.error(error))
})

// end submit stuff

containerEl.appendChild(newAlbumDiv);
newAlbumDiv.appendChild(newAlbumName);
newAlbumDiv.appendChild(newAlbumDescription);
newAlbumDiv.appendChild(newAlbumArtist);
newAlbumDiv.appendChild(newAlbumImageUrl);
newAlbumDiv.appendChild(newAlbumLabelName);
newAlbumDiv.appendChild(newAlbumRating);
newAlbumDiv.appendChild(submitNewAlbumButton);

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
    // deleteAlbumButton.appendChild(editAlbumbutton);
    // sectionEl.appendChild(editAlbumbutton);


    let editAlbumbutton = document.createElement("button");
    editAlbumbutton.innerText = "Edit Album";
    editAlbumbutton.classList.add("edit-album");


    albumtitleh3el.addEventListener("click", () => {
        clearChildren(containerEl)
        displayAlbumPage(album);
    });

    deleteAlbumButton.addEventListener("click", () => {
        fetch(`http://localhost:8080/albums/${albums.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(albums => {
            clearChildren(albuminfoElement);
            displayHomePage(albums)
        })
    });

});

    // deleteAlbumButton.addEventListener("click", () => {
    //     fetch(`http://localhost:8080/albums/${albums.id}`, {
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(albums => {
    //         clearChildren(containerEl);
    //         displayHomePage(albums)
    //     })
    // });

// albums.forEach(album => {
//     const deleteDivEl = document.createElement("div");
//     deleteDivEl.classList.add("delete-div-element");
//     const 

// })

}

function formatDuration(durationInSeconds){
    let minutes = Math.floor(durationInSeconds/60);
    let seconds = durationInSeconds%60;
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function clearChildren(element){
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
};

export { clearChildren }
export { displayAlbumPage }
export { displayHomePage }
export { formatDuration }
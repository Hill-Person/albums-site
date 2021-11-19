import { clearChildren } from "./app.js";
import { displaySongPage } from "./songPage.js";
import { displayHomePage } from "./app.js";
import { formatDuration } from "./app.js";

function displayAlbumPage(album) {

    console.log("made it to album page");
    
    const mainContainer = document.querySelector(".container");

    const mainHeader = document.createElement("h1");
    mainHeader.innerText = "Arnold's Dive In Drive In";
    mainHeader.classList.add("main-header")

    mainContainer.append(mainHeader);

    const singleAlbum = document.createElement("div");
    singleAlbum.classList.add("singleAlbumView");

    const albumArtEl = document.createElement("img")
    albumArtEl.classList.add("album-image");
    albumArtEl.src = album.imgUrl;

    const albumNameEl = document.createElement("h1");
    albumNameEl.innerText = "Album: " + album.name;
    albumNameEl.classList.add("album-title");

    const albumDescEl = document.createElement("h2");
    albumDescEl.innerText = album.description;
    albumDescEl.innerText = "Album rating: " + album.albumRating;
    albumDescEl.classList.add("album-description");

    const albumArtistEl = document.createElement("h2");
    albumArtistEl.innerText = "Artist: " + album.artist + " | " + "Label: " + album.label;
    albumArtistEl.classList.add("artist-name");

    const songListUL = document.createElement("ul");
    songListUL.classList.add("ul-track-list");

    const backButtonElement = document.createElement("span");
    backButtonElement.classList.add("back-button");
    backButtonElement.innerText = "Back To Albums";

    const pDurationElement = document.createElement("p");
    pDurationElement.classList.add("duration");
    
    album.songs.forEach(song => {
        let eachSongLi = document.createElement("li");
        eachSongLi.classList.add("track-list");
        eachSongLi.innerText= song.name + (" ") + formatDuration(song.duration);
        pDurationElement.innerText = ("test");
        songListUL.append(eachSongLi);  
    });
    
    backButtonElement.addEventListener("click", () => {
        clearChildren(mainContainer);
        fetch("http://localhost:8080/albums/")
        .then(res => res.json())
        .then(albums => {
            displayHomePage(albums)
        })
    });
    
    mainContainer.append(singleAlbum);
    singleAlbum.append(albumArtEl, albumArtistEl, albumNameEl, albumDescEl, songListUL, backButtonElement);


}

export { displayAlbumPage };


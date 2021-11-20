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

    const newSongDiv = document.createElement("div");
    newSongDiv.classList.add("song-div");

    const newSongName = document.createElement("input");
    newSongName.type = "text";
    newSongName.placeholder = "Enter Song Name";

    const newSongArtist = document.createElement("input")
    newSongArtist.type = "text";
    newSongArtist.placeholder = "Enter Song Artist";

    const newSongDuration = document.createElement("input");
    newSongDuration.type = "text";
    newSongDuration.placeholder = "Enter Song Duration"

    const newSongbutton = document.createElement("button");
    newSongbutton.innerText = "Submit New Song";

    album.songs.forEach(song => {
        let eachSongLi = document.createElement("li");
        eachSongLi.classList.add("track-list");
        eachSongLi.innerText = song.name + (" ") + " " + song.songRating + " (" + formatDuration(song.duration) + ")";
        pDurationElement.innerText = ("test");
        songListUL.append(eachSongLi);

        const newRatingInput = document.createElement("input");
        newRatingInput.type = "text";
        newRatingInput.placeholder = "Enter New Rating";

        const submitNewRating = document.createElement("button");
        submitNewRating.innerText = "Submit";
        
        songListUL.append(newRatingInput);
        songListUL.append(submitNewRating);
        

        submitNewRating.addEventListener("click", () => {
            const newRatingJson = {
                "songRating": newRatingInput.value
            }
            fetch(`http://localhost:8080/songs/${song.id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRatingJson)
            })
                .then(res => res.json())
                .then(song => {
                    clearChildren(mainContainer);
                    displayAlbumPage(mainContainer, album);
                })
                .catch(err => console.error(err));
        
        })


    });

    backButtonElement.addEventListener("click", () => {
        clearChildren(mainContainer);
        fetch("http://localhost:8080/albums/")
            .then(res => res.json())
            .then(albums => {
                displayHomePage(albums)
            })
    });





    // newSongbutton.addEventListener("click", () => {
    //     const newSongJson = {
    //     "name": newAlbumName.value,
    //     "description": newAlbumDescription.value,
    //     "artist": newAlbumArtist.value,
    //     "imgUrl": newAlbumImageUrl.value,
    //     "label": newAlbumLabelName.value,
    //     "albumRating": newAlbumRating.value,
    //     "songs": [
    //         "name": newSongName.value,
    //         "artist": newSongArtist.value,
    //         "duration": newSongDuration.value,
    //         "comments": []
    //     ]

    //     }
    // });


    mainContainer.append(singleAlbum);
    singleAlbum.append(albumArtEl, albumArtistEl, albumNameEl, albumDescEl, songListUL, backButtonElement);
    newSongDiv.appendChild(newSongName);
    newSongDiv.appendChild(newSongArtist);
    newSongDiv.appendChild(newSongDuration);
    newSongDiv.appendChild(newSongbutton);
    songListUL.appendChild(newSongDiv);

}

export { displayAlbumPage };


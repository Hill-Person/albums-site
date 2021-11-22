import {displayHomePage} from "./app.js";

function displayAlbums() {

    fetch("http://localhost:8080/albums/")
    .then(res => res.json())
    .then(albums => {
        displayHomePage(albums)
    })

}

export {displayAlbums}
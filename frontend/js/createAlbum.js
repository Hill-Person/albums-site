import {displayHomePage} from "./app.js";

function displayAlbumCreation(containerEl) {
    console.log("Display Header")
    const newAlbumDiv = document.createElement("div");
    newAlbumDiv.classList.add("album-div");

    const newAlbumName = document.createElement("input");
    newAlbumName.type = "text";
    newAlbumName.placeholder = "Enter Album Name";

    const newAlbumDescription = document.createElement("input");
    newAlbumDescription.type = "text";
    newAlbumDescription.placeholder = "Enter Album Description";

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
    containerEl.appendChild(headerEl);

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
            .then(albums => {

                displayHomePage(albums)
            })
            .catch(error => console.error(error))
    })

    containerEl.appendChild(newAlbumDiv);
    newAlbumDiv.appendChild(newAlbumName);
    newAlbumDiv.appendChild(newAlbumDescription);
    newAlbumDiv.appendChild(newAlbumArtist);
    newAlbumDiv.appendChild(newAlbumImageUrl);
    newAlbumDiv.appendChild(newAlbumLabelName);
    newAlbumDiv.appendChild(newAlbumRating);
    newAlbumDiv.appendChild(submitNewAlbumButton);
}

export { displayAlbumCreation }
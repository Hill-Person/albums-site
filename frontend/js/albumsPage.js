import { clearChildren } from "./app.js"

function displayAlbumsView() {

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


albumsJson.forEach(album => {

    let albuminfoElement = document.createElement("div");
    albuminfoElement.classList.add("albums-info-container");

    let mainElement = document.createElement("main");
    mainElement.classList.add("main-content")

    let sectionEl = document.createElement("section");
    sectionEl.classList.add("album-library");

    let artistnameh2El = document.createElement("h2");
    artistnameh2El.classList.add("artist-name")
    artistnameh2El.innerText = album.name;

    let albumtitleh3el = document.createElement("h3");
    albumtitleh3el.classList.add("album-title");
    albumtitleh3el.innerText = album.artist;

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("album-description");
    descriptionEl.innerText = album.description;

    containerEl.appendChild(albuminfoElement);
    albuminfoElement.appendChild(mainElement);
    mainElement.appendChild(sectionEl);
    sectionEl.appendChild(artistnameh2El);
    artistnameh2El.appendChild(albumtitleh3el);
    albumtitleh3el.appendChild(descriptionEl);


    albumtitleh3el.addEventListener("click", () => {
        clearChildren(sectionEl)}
    );
});


{
    export {
        displayAlbumsView
    }
};

}





// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Albums</title>
//     <link rel="stylesheet" href="/frontend/css/style.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// </head>
// <body>


// <!-- * main view, album view, song view -->

// <!-- collection of albums
// take you to songs of album
// click single song -->

//     <div class="navbar">
//         <div class="dropdown">
//           <button class="dropbtn">Menu
//             <i class="fa fa-caret-down"></i>
//           </button>
//           <div class="dropdown-content">
//             <a href="#" class="dropdown-content-list">Artists</a>
//             <a href="#" class="dropdown-content-list">Albums</a>
//             <a href="#" class="dropdown-content-list">Songs</a>
//           </div>
//         </div> 
//       </div>


// <h1 class="title">Arnold's Dive In Drive In</h1>

// <div class="albums-info-container">

//     <div class="jukebox-card-item">
//         <h2 class="artist-name">Godspeed You! Black Emperor</h2>
//         <h2 class="album-title">F#A# Infinity</h2>
//         <img class="album-image" im src="/frontend/images/godspeed.jpg">
//         <div class="stars">
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//         </div>

            
//     </div>

//     <div class="jukebox-card-item">
//         <h2 class="artist-name">Oh Sees</h2>
//         <h2 class="album-title">Drop</h2>
//         <img class="album-image" img src="/frontend/images/ohsees.jpg">
//         <div class="stars">
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star"></span>
//             <span class="fa fa-star"></span>
//         </div>
//     </div>

//     <div class="jukebox-card-item">
//         <h2 class="artist-name">Sleep</h2>
//         <h2 class="album-title">Dopesmoker</h2>
//         <img class="album-image" img src="/frontend/images/sleep2.jpg">
//         <div class="stars">
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//         </div>
//     </div>

//     <div class="jukebox-card-item">
//         <h2 class="artist-name">Black Sabbath</h2>
//         <h2 class="album-title">Paranoid</h2>
//         <img class="album-image" img src="/frontend/images/blacksabbath.jpg">
//         <div class="stars">
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star"></span>
//         </div>
//     </div>
// </div>

// <!-- <footer>
//     <p>foot</p>
// </footer> -->

// </body>
// </html>
import {container} from "./app.js";
import {albums} from "./albums.js";
import {clearChildren} from "./app.js";

function displayAlbumView(containerElem, album, songs) {
    
    const albumTitleElem = document.createElement("h2");
    albumTitleElem.classList.add("album-title");
    
    const artistNameElem = document.createElement("h3");
    artistNameElem.classList.add("artist-name");

<<<<<<< HEAD
    const albumImageElem = document.createElement("img");
    albumImageElem.classList.add("album-image")

    
    albumImageElem.appendChild("img");
    artistNameElem.appendChild("h3");
    albumTitleElem.appendChild("h2");




    album.songs.forEach(song => {
        const albumSongsElem = document.createElement("ul");
        albumSongsElem.classList.add("track-list");
        const songTitleElem = document.createElement("li");
        songTitleElem.classList.add("list");
        songTitleElem.innerText = song.title;
        albumSongsElem.appendChild(songTitleElem);

        songTitleElem.addEventListener("click", () => {
            clearChildren(containerElem);
            const albumComponent = albumComponent(album, songs);
            containerElem.innerHTML += albumComponent;
            const aElem = document.querySelector("back-navigation");
            aElem.addEventListener("click", () => {
                clearChildren(containerElem);
                displayAlbumView(containerElem, album);
            })

        })
    });
    const backElem = document.createElement("a");
    backElem.classList.add("back-navigation");
    backElem.innerText = "back to album listings";

    backElem.addEventListener('click', () => {
        clearChildren(containerElem);
        displayAlbumsView(containerElem, albums);
    });
=======
function displayAlbumView(containerEl, album){


    const h1El = document.createElement("h1");
    h1El.classList.add("title");

   const sectionEl = document.createElement("section");
   sectionEl.classList.add("album-view");

   const artistNameHeaderEl = document.createElement("h2");
   artistNameHeaderEl.classList.add("artist-name");

   const albumTitleEl = document.createElement("h3");
   albumTitleEl.classList.add("album-title");

   const albumListEl = document.createElement("ul");
   albumListEl.classList.add("track-list");
   h1El.innerHTML = "test test test"
   
    h1El.appendChild(sectionEl);
    sectionEl.appendChild(albumTitleEl);
    albumTitleEl.appendChild(albumListEl);
    albumListEl.appendChild(containerEl);

    // albumListEl.appendChild()

>>>>>>> 0932a8fad045db8c37e691a9d0ca005ab4ce29f4
}
export {displayAlbumView}



export{displayAlbumView};

// function displayAlbumView(containerElem, album) {
//     const albumCollectionElem = document.createElement("section");
//     albumCollectionElem.classList.add("album-view");

//     const albumInfoElem = document.createElement("section");
//     albumInfoElem.classList.add("album-info");


//     const h2
    
    
// }





// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Album</title>
//     <link rel="stylesheet" href="/css/style.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// </head>

// <body>

// <div class="navbar">
//     <div class="dropdown">
//       <button class="dropbtn">Menu
//         <i class="fa fa-caret-down"></i>
//       </button>
//       <div class="dropdown-content">
//         <a href="#" class="dropdown-content-list">Artists</a>
//         <a href="#" class="dropdown-content-list">Albums</a>
//         <a href="#" class="dropdown-content-list">Songs</a>
//       </div>
//     </div> 
//   </div>

// <h1 class="title">Arnold's Dive In Drive In</h1>

// <div class="single-album-info-container">

//     <div class="album-view-info-container">
//       <section class="album-view">
//         <h2 class="artist-name">Black Sabbath</h2>
//         <h3 class="album-title">Paranoid</h2>
//         <img class="album-image" img src="/images/blacksabbath.jpg">
//             <div class="stars">
//                 <span class="fa fa-star checked"></span>
//                 <span class="fa fa-star checked"></span>
//                 <span class="fa fa-star checked"></span>
//                 <span class="fa fa-star checked"></span>
//                 <span class="fa fa-star"></span>
//             </div>
//     </div>


//     <div class="tracklist">
//         <ul class="track-list">
//             <li class="list">1. War Pigs</li>
//             <li class="list">2. Paranoid</li>
//             <li class="list">3. Planet Caravan</li>
//             <li class="list">4. Iron Man</li>
//             <li class="list">5. Electric Funeral</li>
//             <li class="list">6. Hand Of Doom</li>
//             <li class="list">7. Rat Salad</li>
//             <li class="list">8. Fairies Wear Boots</li>
//         </ul>
//       </section>
//     </div>

//     <!-- comment box goes here -->

// </div>

    
// </body>
// </html>
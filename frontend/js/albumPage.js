import { clearChildren } from "./app.js";
// import { albumsJson } from "./albumsJson.js";
import { displaySongPage } from "./songPage.js"

function displayAlbumPage(album) {

    console.log("made it to album page");
    // console.log(album);

    //nav bar here
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
    albumNameEl.innerText = album.name;
    albumNameEl.classList.add("album-title");

    const albumDescEl = document.createElement("h2");
    albumDescEl.innerText = album.description;
    albumDescEl.classList.add("album-description");

    const albumArtistEl = document.createElement("h2");
    albumArtistEl.innerText = album.artist;
    albumArtistEl.classList.add("artist-name");

    const songListUL = document.createElement("ul");
    songListUL.classList.add("ul-track-list");
    console.log(album);


    album.songs.forEach(song => {
        let eachSongLi = document.createElement("li");
        eachSongLi.classList.add("track-list");
        eachSongLi.innerText= song.name;
        songListUL.append(eachSongLi);


       eachSongLi.addEventListener("click", () => {
            clearChildren(mainContainer);
            displaySongPage(album);

       });

    });
    
    mainContainer.append(singleAlbum);
    singleAlbum.append(albumArtEl, albumArtistEl, albumNameEl, albumDescEl, songListUL);


}

export { displayAlbumPage };

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
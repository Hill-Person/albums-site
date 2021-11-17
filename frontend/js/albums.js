import { clearChildren } from "./app.js"



function displayAlbumsView (mainEl, albumsJSON) {

    const sectionEl = document.createElement("section");
    sectionEl.classList.add("album-library");
    mainEl.appendChild(sectionEl);

    albumsJSON.forEach(album => {
        const divEl = document.createElement("div");
        divEl.classList.add("album");
        const albumNameElem = document.createElement("h2");
        const albumDescriptionElem = document.createElement("p");
        albumNameElem.innerText = album.name;
        albumDescriptionElem.innerText = album.description;

        divEl.appendChild(albumNameElem);
        divEl.appendChild(albumDescriptionElem);

        sectionEl.appendChild(divEl);
    
    });

}

{
    export {
        displayAlbumsView
    }
};





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
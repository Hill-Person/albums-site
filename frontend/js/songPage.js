import { clearChildren } from "./app.js";
import { albumsJson } from "./albumsJson.js";


function displaySongPage(album) {

    // console.log("made it to song page");
    console.log(album.songs);

    const mainContainer = document.querySelector(".container");

    const mainHeader = document.createElement("h1");
    mainHeader.innerText = "Arnold's Dive In Drive In";
    mainHeader.classList.add("main-header");

    mainContainer.append(mainHeader);

    const singleSong = document.createElement("div");
    singleSong.classList.add("single-song-div");

    const singleSongListUL = document.createElement("ul");
    singleSongListUL.classList.add("ul-track-list");
    singleSong.appendChild(singleSongListUL);

    const singleSongLI = document.createElement("li");
    singleSongLI.classList.add("single-song");

    album.songs.forEach(song => {
        let singleSongLI = document.createElement("li");
        singleSongLI.classList.add("single-song");
        singleSongLI.innerText = song.name;
        singleSongListUL.appendChild(singleSongLI);
        
    });

    mainContainer.appendChild(singleSong);
    singleSong.appendChild(singleSongListUL);
    singleSongListUL.appendChild(singleSongLI);





}

export { displaySongPage }






// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Song</title>
//     <link rel="stylesheet" href="/frontend/css/style.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// </head>
// <body>


//     <h1 class="title">Arnold's Dive In Drive In</h1>

//     <div class="tracklist">
//         <ul class="track-list">
//             <li class="list">1. War Pigs</li>
//             <!-- <li class="list">2. Paranoid</li>
//             <li class="list">3. Planet Caravan</li>
//             <li class="list">4. Iron Man</li>
//             <li class="list">5. Electric Funeral</li>
//             <li class="list">6. Hand Of Doom</li>
//             <li class="list">7. Rat Salad</li>
//             <li class="list">8. Fairies Wear Boots</li> -->
//         </ul>

//     </div>

//     <!-- Add a song to the song list -->
    
// </body>
// </html>
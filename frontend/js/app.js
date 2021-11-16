import { albumsJson } from "./albumsJson.js";

let containerEl = document.querySelector(".container");
let mainElement = document.createElement("main-content");
let headerEl = document.createElement("header");

let h1El = document.createElement("h1");
h1El.classList.add("main-header");
h1El.innerText = "Arnold's Dive In Drive In";

let h2El = document.createElement("h2");
h2El.classList.add("artist-name");

let h2El2 = document.createElement("h2")
h2El2.classList.add("album-title");

headerEl.appendChild(h1El);
// mainElement.appendChild(sectionEl);
containerEl.append(headerEl);
containerEl.appendChild(mainElement);

albumsJson.forEach(album => {

    const sectionEl = document.createElement("section");
    sectionEl.classList.add("album-library");

    const artistnameh2El = document.createElement("h2");
    artistnameh2El.innerText = album.name;

    const albumtitleh3el = document.createElement("h3");
    albumtitleh3el.innerText = album.artist;

    const descriptionEl = document.createElement("p");
    descriptionEl.innerText = album.description;



    sectionEl.appendChild(artistnameh2El);
    sectionEl.appendChild(albumtitleh3el);
    sectionEl.appendChild(descriptionEl);
    mainElement.appendChild(sectionEl);
    
});


// function clearChildren(element) {
//     while (element.firstchild) {
//         element.removeChild(element.lastChild);
//     }
// }


// export { clearChildren };

/* <h1 class="main-header">Arnold's Dive In Drive In</h1>

<div class="albums-info-container">

    <main class="main-content">
        <section class="album-library">
        <h2 class="artist-name">Godspeed You! Black Emperor</h2>
        <h3 class="album-title">F#A# Infinity</h2>
        <img class="album-image" im src="/images/godspeed.jpg">
        <div class="stars">
            <section class="album-decription">
                <p class="album-decription">
                
                </p>
            </section>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
        </div>
        </section>

            
    </main>

    <main class="main-content">
        <section class="album-library">
        <h2 class="artist-name">Oh Sees</h2>
        <h3 class="album-title">Drop</h2>
        <img class="album-image" img src="/images/ohsees.jpg">
        <div class="stars">
            <section class="album-decription">
                <p class="album-decription"></p>
            </section>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
        </section>

    </main>

    <main class="main-content">
        <section class="album-library">
        <h2 class="artist-name">Sleep</h2>
        <h3 class="album-title">Dopesmoker</h2>
        <img class="album-image" img src="/images/sleep2.jpg">
        <div class="stars">
            <section class="album-decription">
                <p class="album-decription">

                </p>
            </section>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
        </div>
        </section>

    </main>

    <main class="main-content">
        <section class="album-library">
        <h2 class="artist-name">Black Sabbath</h2>
        <h3 class="album-title">Paranoid</h2>
        <img class="album-image" img src="/images/blacksabbath.jpg">
        <div class="stars">
            <section class="album-decription">
                <p class="album-decription">

                </p>
            </section>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
        </div>
    </section>

    </main>
</div> */
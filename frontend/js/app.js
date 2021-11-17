import { albumsJson } from "./albumsJson.js";

const containerEl = document.querySelector(".container");

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
    artistnameh2El.innerText = album.artist;

    let albumtitleh3el = document.createElement("h3");
    albumtitleh3el.classList.add("album-title");
    albumtitleh3el.innerText = album.name;

    let albumImageEl = document.createElement("img");
    albumImageEl.classList.add("album-image")
    albumImageEl.innerHTML = album.imgUrl;

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("album-description");
    descriptionEl.innerText = album.description;

    containerEl.appendChild(albuminfoElement);
    albuminfoElement.appendChild(mainElement);
    mainElement.appendChild(sectionEl);
    sectionEl.appendChild(artistnameh2El);
    sectionEl.appendChild(albumtitleh3el);
    sectionEl.appendChild(descriptionEl);
    sectionEl.appendChild(albumImageEl);


    albumtitleh3el.addEventListener("click", () => {
        clearChildren(sectionEl)} // this needs fixed
    );
});

// function needs fixed

function clearChildren(element){
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
};



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
import generateJoke from "./geberateJoke";
import "./styles/main.scss"
import laughing from "./assets/laughing.jpg"

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke();
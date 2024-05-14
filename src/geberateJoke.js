import axios from 'axios'

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com', config).then(result => {
        document.getElementById('joke').innerHTML = result.data.joke
    })
}

export default generateJoke;

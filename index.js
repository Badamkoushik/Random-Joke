let jokeText = document.getElementById("jokeText");

let jokeBtn = document.getElementById("jokeBtn");

let spinner = document.getElementById("spinner");

let url = "https://apis.ccbp.in/jokes/random";

function randomJoke() {
    jokeText.textContent = "";
    spinner.classList.remove("d-none");
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            jokeText.textContent = data.value;
            spinner.classList.add("d-none");
        })
}
jokeBtn.addEventListener("click", randomJoke);
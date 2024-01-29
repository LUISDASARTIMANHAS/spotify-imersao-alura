const searchInput = document.getElementById("searchInput")
const resultArtist = document.getElementById("resultArtist")
const resultPlaylist = document.getElementById("resultPlaylist")

function getData(search) {
    const url = `http://localhost:2024/artists?name_like=${search}`;
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8",
        }
    };

    fetch(url, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text();
            }
        })
        .then((data) => {
            console.log("DATA RESPONSE: ");
            console.log(data);
            display(data);
        })
        .catch((error) => console.debug(error));
}

function display(data) {
    const artistName = document.getElementById("artistName")
    const artistImg = document.getElementById("artistImg")
    resultPlaylist.classList.add("hidden")

    data.forEach(artist => {
        artistName.textContent = artist.name
        artistImg.src = artist.urlImg
    });

    resultArtist.classList.remove("hidden")
}

document.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        resultPlaylist.classList.add("hidden")
        resultArtist.classList.remove("hidden")
        return
    }

    getData(searchTerm)
})
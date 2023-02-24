let table = document.querySelector(".position");

const fetchPromise = fetch("https://rickandmortyapi.com/api/character");

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (result of data.results) {
      if (result.status === "Alive" && result.episode.length > 25) {
        console.log(result);

        table.innerHTML += `<article> <img src="${result.image}"></img> <h1>${result.name}</h1> <h3> is ${result.status}</h3> and is a Main Character </article>`;
      } else {
        result.status = "Dead";
      }
    }
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

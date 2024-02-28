const name = document.getElementById("name");

const movies = document.getElementsByName("movie");

const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");



function popUp() {
  let count = 0;
  for (let movie of movies) {
    if (movie.checked === true) {
      count += 1;
    }
  }

  window.alert(name.value + "님 저랑 취향이 " + count + "개 같으시네요. ");
}

submitButton.addEventListener("click", popUp);
submitButton.addEventListener("click", popUp);

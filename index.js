function getCards() {
  let url = "http://faker.hook.io/?property=helpers.userCard&amp;locale=en_US";
  Promise.all([
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
    fetch(url),
  ])
    .then(function (responses) {
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );
    })
    .then((data) => displayResults(data))
    .catch(function (error) {
      console.log(error);
    });
}

function displayResults(data) {
  console.log(data);
  $(".results").empty();
  $(".results").append(
    `<li>
    <p>${data}</p>
    </li>`
  );
}

function watchForm() {
  $("form").submit((event) => {
    getCards();
  });
}

$(watchForm);

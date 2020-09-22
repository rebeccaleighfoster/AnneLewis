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
  var display = document.getElementById("displayData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "Name: " + data[i].name + "Username:" + data[i].username;
    display.appendChild(div);
  }
}

function loaded() {
  getCards();
}

$(loaded);

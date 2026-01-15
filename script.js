function saveComments(event) {
  let yourSelection = document.querySelector("#check-box");
  alert("Hello")
}
//submittion to the k-drive comes here

let button = document.querySelector("button");
button.addEventListener("click", saveComments);

function populateComments(event) {
  event.preventDefault()
  alert("Howdy..!!")
}

let ticker = document.querySelector("#check-box")
ticker.addEventListener("click", populateComments)

function yourComments(city) {
  let apiKey = "SA.97d6b0a296c3410bb74c551f3c14dcc2.129b6c31655413dec32ee22e0fc64c9158b6309f";
  let apiLocation = `https://etv.sodyo.com/integration/api/v1/project/9e72b9f4-5662-4b0a-a0e7-a4b253f4ff7b/content/5271c5ee-4c5f-4022-a699-4ac895353028/interactions`;
  console.log(apiLocation);
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastHtml = "";}

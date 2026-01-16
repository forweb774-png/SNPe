
function displayUsername(response) {
  console.log(response.data);

  let viewerComments = document.querySelector(".textGoesHere");
  viewerComments.innerHTML = `${response.data}`;
}

apiKey =
  "https://etv.sodyo.com/integration/api/v1/project/{projectUuid}/content/{contentUuid}/interactions";
let apiUrl =
  "https://etv.sodyo.com/integration/api/v1/project/9e72b9f4-5662-4b0a-a0e7-a4b253f4ff7b/content/5271c5ee-4c5f-4022-a699-4ac895353028/interactions";

axios.get(apiUrl).then(displayUsername);

let fetchData = async (url) => {
  try {
    let response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
   
  }
};

fetchData(
  "https://etv.sodyo.com/integration/api/v1/project/9e72b9f4-5662-4b0a-a0e7-a4b253f4ff7b/content/5271c5ee-4c5f-4022-a699-4ac895353028/interactions"
);

//DATA EXTRACTION
function getSelectedCheckboxValues() {
 
  let checkboxes = document.querySelectorAll('input[name="interest"]:checked');
  let selectedValues = [];

  checkboxes.forEach((checkbox) => {
    selectedValues.push(checkbox.value);
  });

  return selectedValues;
}
//POPULATION
function exportDataToSpreadsheet() {
  let data = getSelectedCheckboxValues();
  if (data.length === 0) {
    alert("Please make a selection");
    return;
  }

  let csvContent = "Selected Interests\n";
  
  data.forEach((value) => {
    csvContent += value + "\n";
  });

  // Blob and download link(Generation)
  const blob = new Blob([csvContent], { type:'text/plain'});
  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.setAttribute("download", "selected_data.csv"); // file name
  document.body.appendChild(downloadLink);
  downloadLink.click();

  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}

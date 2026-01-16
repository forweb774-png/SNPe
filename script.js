import axios from 'axios';

axios.defaults.baseURL = 'https://etv.sodyo.com/integration/api/v1/project/9e72b9f4-5662-4b0a-a0e7-a4b253f4ff7b/content/5271c5ee-4c5f-4022-a699-4ac895353028/interactions' ;
axios.defaults.headers.common['Authorization'] = 'Bearer your-token';
axios.get('/posts'); // No need to repeat the full URL

console.log(baseURL)
//DATA EXTRACTION
function getSelectedCheckboxValues() {
  // Select all checked checkboxes with the name "interest"
  let checkboxes = document.querySelectorAll('input[name="interest"]:checked');
  let selectedValues = [];

  // Iterate over the selected checkboxes and push their values into the array
  checkboxes.forEach((checkbox) => {
    selectedValues.push(checkbox.value);
  });

  return selectedValues;
}
//POPULATION
function exportDataToSpreadsheet() {
  let data = getSelectedCheckboxValues();
  if (data.length === 0) {
    alert("Please select at least one option.");
    return;
  }

  // Convert the array of values into a CSV format string
  // Add a header row
  let csvContent = "Selected Interests\n";
  // Add each selected value as a new row
  data.forEach((value) => {
    csvContent += value + "\n";
  });

  // Create a Blob and generate a download link
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.setAttribute("download", "selected_data.csv"); // Specify the file name
  document.body.appendChild(downloadLink);
  downloadLink.click(); // Trigger the download

  // Clean up
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data); // API data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


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

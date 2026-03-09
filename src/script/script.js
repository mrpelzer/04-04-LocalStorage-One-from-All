var Database = {
  keyName: "Mutant Database",
  data: []
};

function loadDataSource() {


}


function searchForMutantByAlias(mutantAlias) {

  var index = -1;






  if (index === -1) {
    alert("Invalid Alias");
  } else {
    displayData(index);
  }
}


function displayData(index) {

  var htmlTemplate = ``;








  document.querySelector("#results-section").innerHTML = htmlTemplate;
}


function getSelectedValue() {
  const selectElement = document.querySelector('#select-mutant');
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedText = selectedOption.text;

  // TEST METHOD // REMOVE OR HIDE
  alert(selectedText);

  searchForMutantByAlias(selectedText);

}

document.querySelector("#select-mutant").addEventListener('change', getSelectedValue);



// CALL BY DEFAULT
loadDataSource();
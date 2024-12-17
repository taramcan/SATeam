var currentIDBeingProcessed
//var iDForFollowUpDataRequest

function populate300R() {
  var ui = SpreadsheetApp.getUi();

  var student = ui.prompt(
    'Paste the ID of the student to update the columns',
    'Student ID: ',
    ui.ButtonSet.OK_CANCEL);

  var currentIDBeingProcessed = student.getResponseText();
  getColumnValuesForStudent(currentIDBeingProcessed)
  SpreadsheetApp.flush()

}

function populate300RDocument(){
  var ui = SpreadsheetApp.getUi();
     var student = ui.prompt(
    'Paste the ID of the student to generate the 300R',
    'Student ID: ',
    ui.ButtonSet.OK_CANCEL);

  currentIDBeingProcessed = student.getResponseText();
  update300RDocument(currentIDBeingProcessed)
  
  for (let i = 0; i < lastRowOf300R; i++) {
    if (form300RData[i][4] == currentIDBeingProcessed) {
      var row = i;
      sheetFor300R.getRange(row + 1, 3).setValue(new Date());
      if(!form300RData[i][1]){
        sheetFor300R.getRange(row + 1, 2).setValue("Initial Processing");
      }
      else if(form300RData[i][1] == "Initial Processing"){
        sheetFor300R.getRange(row + 1, 2).setValue("Gen 1");
      }
      else if(form300RData[i][1] == "Gen 1"){
        sheetFor300R.getRange(row + 1, 2).setValue("Gen 2");
      }
    }
  }  
}



















/*
function populate300R(){
  var ui = SpreadsheetApp.getUi();

  var student = ui.prompt(
    'Paste the ID of the student',
    'Student ID: ',
    ui.ButtonSet.OK_CANCEL);
  
  var currentIDBeingProcessed = student.getResponseText();
  

  getColumnValuesForStudent(currentIDBeingProcessed)

 
  for(let i = 0; i < lastRowOf300R; i++){
    if(form300RData[i][4] == currentIDBeingProcessed){
      var row = i
      sheetFor300R.getRange(row + 1, 3).setValue(new Date())
    }
  }
  

  update300RDocument(currentIDBeingProcessed)

}
*/

//When form 2024-2025 SAT Processing (Chairperson) is submitted
//automatically update coversheet
//automatically send out initial request email to nurse, academic counselor, teachers
//automatically place new studentID and studentEmail onto form300R data

function satInitialProcessing(){
  const coversheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SAT Coversheet')  
  
  updateCoverSheet()
  //initialInputRequestEmail()
  placeStudentOnto300RSheet() 
}


function updateCoverSheet(){
  var studentID = coverData[lastRowOfCoversheet - 1][3]
  var studentEmail = (coverData[lastRowOfCoversheet - 1][33]).toString().toLowerCase()
  var academicCounselor = coverData[lastRowOfCoversheet - 1][64]
  var mHP = coverData[lastRowOfCoversheet - 1][65]
  var genEdPointPerson = coverData[lastRowOfCoversheet - 1][63]
  var initialMeeting = new Date(coverData[lastRowOfCoversheet - 1][66]).toDateString()


  var initialTime = coverData[lastRowOfCoversheet-1][67]

  if (initialTime instanceof Date) {
  initialTime.setMinutes(initialTime.getMinutes() - 36);
  var formattedTime = Utilities.formatDate(initialTime, Session.getScriptTimeZone(), 'hh:mm a');
} else {
  // If it's not a date object, leave it as is or handle accordingly
  var formattedTime = initialTime;
}

  coversheet.getRange(lastRowOfCoversheet, 7).setValue(studentEmail)
  coversheet.getRange(lastRowOfCoversheet, 11).setValue(academicCounselor)
  coversheet.getRange(lastRowOfCoversheet, 12).setValue(mHP)
  coversheet.getRange(lastRowOfCoversheet, 13).setValue(genEdPointPerson)
  coversheet.getRange(lastRowOfCoversheet, 17).setValue(initialMeeting)
  coversheet.getRange(lastRowOfCoversheet, 18).setValue(formattedTime)

  if(coverData[lastRowOfCoversheet - 1][49] == "Yes"){
    let parentName = getParentName(studentEmail)
    let parentEmail = getParentEmail(studentEmail)
    coversheet.getRange(lastRowOfCoversheet, 14).setValue(parentName)
    coversheet.getRange(lastRowOfCoversheet, 15).setValue(parentEmail)
  }
  else{
    coversheet.getRange(lastRowOfCoversheet, 14).setValue(coverData[lastRowOfCoversheet-1][50])
    coversheet.getRange(lastRowOfCoversheet, 15).setValue(coverData[lastRowOfCoversheet-1][51])
  }

  var initialConcern = getInitialConcern(studentEmail)
  coversheet.getRange(lastRowOfCoversheet, 10).setValue(initialConcern)

  var studyHalls = new Array
  if(coverData[lastRowOfCoversheet - 1][34]){
    studyHalls.push("1A (" + coverData[lastRowOfCoversheet - 1][34] + "), ")
  }
  if(coverData[lastRowOfCoversheet - 1][35]){
    studyHalls.push("2A (" + coverData[lastRowOfCoversheet - 1][35] + "), ")
  }
  if(coverData[lastRowOfCoversheet - 1][36]){
    studyHalls.push("3A (" + coverData[lastRowOfCoversheet - 1][36] + "), ")
  }
  if(coverData[lastRowOfCoversheet - 1][37]){
    studyHalls.push("4A (" + coverData[lastRowOfCoversheet - 1][37] + "), ")
  }
  if(coverData[lastRowOfCoversheet - 1][38]){
    studyHalls.push("1B (" + coverData[lastRowOfCoversheet - 1][38] + "), ")
  }
  if(coverData[lastRowOfCoversheet - 1][39]){
    studyHalls.push("2B (" + coverData[lastRowOfCoversheet - 1][39] + "), ")
  }
  if(coverData[lastRowOfCoversheet - 1][40]){
    studyHalls.push("3B (" + coverData[lastRowOfCoversheet - 1][40] + "), ")
  }
  if(coverData[lastRowOfCoversheet - 1][41]){
    studyHalls.push("4B (" + coverData[lastRowOfCoversheet - 1][41] + ")")
  }

  coversheet.getRange(lastRowOfCoversheet, 8).setValue(studyHalls)

  var meetingPreference = getGenEdTeacherMeetingTimes(genEdPointPerson)
  coversheet.getRange(lastRowOfCoversheet, 9).setValue(meetingPreference)

}

function getParentName(studentEmail){
  let parentName
  for(let i = 1; i < lastRowOfInitialReferral; i++){
    if(studentEmail == (initialReferralData[i][4]).toString().toLowerCase()){
      parentName = initialReferralData[i][5]
    }
  }
  return parentName
}
function getParentEmail(studentEmail){
    let parentEmail
  for(let i = 1; i < lastRowOfInitialReferral; i++){
    if(studentEmail == (initialReferralData[i][4]).toString().toLowerCase()){
      parentEmail = initialReferralData[i][1]
    }
  }
  return parentEmail

}
function getInitialConcern(studentEmail){
      let initialConcern
  for(let i = 1; i < lastRowOfInitialReferral; i++){
    if(studentEmail == (initialReferralData[i][4]).toString().toLowerCase()){
      initialConcern = initialReferralData[i][7]
    }
  }
  return initialConcern
}

function getGenEdTeacherMeetingTimes(genEdPointPerson){
  let meetingPreference
  for(let i = 1; i<lastRowOfMeetingPref; i++){
    if(genEdPointPerson == meetingPreferenceData[i][17]){
      meetingPreference = meetingPreferenceData[i][13]
    }
  }
  return meetingPreference
}

function placeStudentOnto300RSheet(){
  var studentID = coverData[lastRowOfCoversheet - 1][3]
  var studentEmail = coverData[lastRowOfCoversheet - 1][33]

  sheetFor300R.getRange(lastRowOf300R + 1, 5).setValue(studentID);
  sheetFor300R.getRange(lastRowOf300R + 1, 6).setValue(studentEmail);
  sheetFor300R.getRange(lastRowOf300R + 1, 2).setValue("Initial Processing")
  sheetFor300R.getRange(lastRowOf300R + 1, 3).setValue(coverData[lastRowOfCoversheet - 1][0])
}
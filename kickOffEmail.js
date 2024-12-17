//triggered by form input "Initial Referral"
//sends one email to SATChair listed below.

var SATChairEmail = "csmith@bfhsla.org"

function kickOffEmail(){
  //collect the most recent response
  const formResponses = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Initial Referral')

  var recentResponse = formResponses.getRange(formResponses.getLastRow(), 1, 1, formResponses.getLastColumn()).getDisplayValues();

  var person = recentResponse[0][5]
  var relationship = recentResponse[0][6]
  var child = recentResponse[0][2]
  var grade = recentResponse[0][3]
  var referrerEmail = recentResponse[0][1]


  var htmlKickoffEmail = HtmlService.createTemplateFromFile('kickoffEmail')

  htmlKickoffEmail.person = person
  htmlKickoffEmail.relationship = relationship
  htmlKickoffEmail.child = child
  htmlKickoffEmail.grade = grade
  htmlKickoffEmail.referrerEmail = referrerEmail

  htmlKickoffEmail = htmlKickoffEmail.evaluate().getContent();

    //send the email

  
    GmailApp.sendEmail(
       SATChairEmail,
      'SAT Initial Referral',
      'This email contains html',
      {htmlBody: htmlKickoffEmail}
    );

}
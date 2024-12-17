var studentIDBeingProcessed
var dueDate

function followUpEmailInputRequest(){

  var ui = SpreadsheetApp.getUi();

  var student = ui.prompt(
    'Paste the student ID for whom you are requesting follow up input',
    'Student ID: ',
    ui.ButtonSet.OK_CANCEL);
  var due = ui.prompt(
    'On what date do you need the responses returned?',
    'Due Date: ',
    ui.ButtonSet.OK_CANCEL);

  studentIDBeingProcessed = student.getResponseText();
  dueDate = due.getResponseText();
  sendRequestDataEmail(studentIDBeingProcessed)
}


function sendRequestDataEmail(studentIDBeingProcessed){

  for (let i = 0; i < lastRowOfCoversheet; i++){
    if (coverData[i][3] == studentIDBeingProcessed) {
      var rowNumber = i;
    
      //Get all teacher emails:
      var engTeacherEmail = getTeacherEmail(coverData[rowNumber][43])
      var mathTeacherEmail = getTeacherEmail(coverData[rowNumber][44])
      var sciTeacherEmail = getTeacherEmail(coverData[rowNumber][45])
      var SSTeacherEmail = getTeacherEmail(coverData[rowNumber][46])
      var WLTeacherEmail = getTeacherEmail(coverData[rowNumber][47])
      var academicCounsEmail = getTeacherEmail(coverData[rowNumber][64])


      //Get student info for email

      var htmlFollowUpEmailTeachers = HtmlService.createTemplateFromFile('followUpEmailTeachers')
      var htmlFollowUpEmailCounselor = HtmlService.createTemplateFromFile('followUpEmailCounselor')


      htmlFollowUpEmailTeachers.studentName = coverData[rowNumber][2]
      htmlFollowUpEmailTeachers.LAID = coverData[rowNumber][3]
      htmlFollowUpEmailTeachers.dueDate = dueDate

      htmlFollowUpEmailCounselor.studentName = coverData[rowNumber][2]
      htmlFollowUpEmailCounselor.LAID = coverData[rowNumber][3]
      htmlFollowUpEmailCounselor.dueDate = dueDate



      htmlFollowUpEmailTeachers = htmlFollowUpEmailTeachers.evaluate().getContent();
      htmlFollowUpEmailCounselor = htmlFollowUpEmailCounselor.evaluate().getContent();

      //send the email to everyone

      GmailApp.sendEmail(
        academicCounsEmail,
        'SATeam Follow Up: Your Input Requested',
        'This email contains html',
        {htmlBody: htmlFollowUpEmailCounselor}
      );

      
      if(coverData[rowNumber][43]){
        GmailApp.sendEmail(
          engTeacherEmail,
          'SATeam Follow Up: Your Input Requested',
          'This email contains html',
          {htmlBody: htmlFollowUpEmailTeachers}
        );
      }

      
      if(coverData[rowNumber][44]){
        GmailApp.sendEmail(
          mathTeacherEmail,
          'SATeam Follow Up: Your Input Requested',
          'This email contains html',
          {htmlBody: htmlFollowUpEmailTeachers}
        );
      }

      if(coverData[rowNumber][45]){

        GmailApp.sendEmail(
          sciTeacherEmail,
          'SATeam Follow Up: Your Input Requested',
          'This email contains html',
          {htmlBody: htmlFollowUpEmailTeachers}
        );
      }

      if(coverData[rowNumber][46]){

        GmailApp.sendEmail(
          SSTeacherEmail,
          'SATeam Follow Up: Your Input Requested',
          'This email contains html',
          {htmlBody: htmlFollowUpEmailTeachers}
        );
      }

      if(coverData[rowNumber][47]){

        GmailApp.sendEmail(
          WLTeacherEmail,
          'SATeam Follow Up: Your Input Requested',
          'This email contains html',
          {htmlBody: htmlFollowUpEmailTeachers}
        );  
      }
    }
  }
}


  
    
    function getTeacherEmail(teacher){
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Imported F/S List');
      const data = sheet.getDataRange().getValues();

      var teacherEmail

        data.forEach(function(row, index){
          if(row[0] == teacher){
            teacherEmail = row[3]
          }
        })
        return teacherEmail
    }


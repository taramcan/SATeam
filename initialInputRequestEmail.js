//This function is called in the updateCoversheet script which is triggered when the SAT request is processed

var nurseEmail = "nurse@bfhsla.org"



function initialInputRequestEmail() {
  //collect the most recent response
  const formResponses = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SAT Coversheet');
  
  var recentResponse = formResponses.getRange(formResponses.getLastRow(), 1, 1, formResponses.getLastColumn()).getDisplayValues();


  var engTeacherEmail = getTeacherEmail(recentResponse[0][43])
  var mathTeacherEmail = getTeacherEmail(recentResponse[0][44])
  var sciTeacherEmail = getTeacherEmail(recentResponse[0][45])
  var SSTeacherEmail = getTeacherEmail(recentResponse[0][46])
  var WLTeacherEmail = getTeacherEmail(recentResponse[0][47])
  var academicCounsEmail = getTeacherEmail(recentResponse[0][64])
  var MHPEmail = getTeacherEmail(recentResponse[0][65])
  var initialReferrerEmail = recentResponse[0][14] //this is actually the parent, even if they were not the initial referrer


  var meetingDate = new Date(recentResponse[0][16]).toDateString()
  var meetingTime = recentResponse[0][17]



  monthDue = new Date(recentResponse[0][16]).getMonth()
  dayDue = new Date (recentResponse[0][16]).getDate() - 1
  yearDue = new Date(recentResponse[0][16]).getFullYear()
  var dueDate = new Date(dueDate).setFullYear(yearDue, monthDue, dayDue)
  dueDate = new Date(dueDate).toDateString()

  if(new Date(dueDate).getDay() === 0){
    monthDue = new Date(recentResponse[0][16]).getMonth()
    dayDue = new Date (recentResponse[0][16]).getDate() - 3
    yearDue = new Date(recentResponse[0][16]).getFullYear()
    var dueDate = new Date(dueDate).setFullYear(yearDue, monthDue, dayDue)
    dueDate = new Date(dueDate).toDateString()
  }
  if(new Date(dueDate).getDay() === 6){
    monthDue = new Date(recentResponse[0][16]).getMonth()
    dayDue = new Date (recentResponse[0][16]).getDate() - 2
    yearDue = new Date(recentResponse[0][16]).getFullYear()
    var dueDate = new Date(dueDate).setFullYear(yearDue, monthDue, dayDue)
    dueDate = new Date(dueDate).toDateString()
  }


  var htmlInitialNurse = HtmlService.createTemplateFromFile('nurseEmail')
  var htmlInitialTeacher = HtmlService.createTemplateFromFile('teacherEmailInitialRequest')
  var htmlInitialCounselor = HtmlService.createTemplateFromFile('counselorInitialRequest')
  var htmlInitialReferrer = HtmlService.createTemplateFromFile('initialReferrerResponse')


  htmlInitialNurse.studentName = recentResponse[0][2]
  htmlInitialNurse.LAID = recentResponse[0][3]
  htmlInitialNurse.HR = recentResponse[0][42]
  htmlInitialNurse.dueDate = dueDate
  htmlInitialNurse.meetingDate = meetingDate
  

  htmlInitialTeacher.studentName = recentResponse[0][2]
  htmlInitialTeacher.LAID = recentResponse[0][3]
  htmlInitialTeacher.dueDate = dueDate
  htmlInitialTeacher.meetingDate = meetingDate

  htmlInitialCounselor.studentName = recentResponse[0][2]
  htmlInitialCounselor.LAID = recentResponse[0][3]
  htmlInitialCounselor.SH = recentResponse[0][7]
  htmlInitialCounselor.dueDate = dueDate
  htmlInitialCounselor.meetingDate = meetingDate


  htmlInitialReferrer.person = recentResponse[0][13]
  htmlInitialReferrer.child = recentResponse[0][2]
  htmlInitialReferrer.meetingDate = meetingDate
  htmlInitialReferrer.meetingTime = meetingTime



  var htmlForNurse= htmlInitialNurse.evaluate().getContent();
  var htmlForTeacher = htmlInitialTeacher.evaluate().getContent();
  var htmlForCounselor = htmlInitialCounselor.evaluate().getContent();
  var htmlForInitialReferrer = htmlInitialReferrer.evaluate().getContent();




  //send the email

  


      GmailApp.sendEmail(
      initialReferrerEmail,
      'SATeam Meeting Request',
      'This email conains html',
      {htmlBody: htmlForInitialReferrer}

    )



    GmailApp.sendEmail(
       nurseEmail,
      'Student Screener Results Request',
      'This email contains html',
      {htmlBody: htmlForNurse}
    );

    GmailApp.sendEmail(
       academicCounsEmail,
      'SATeam Student Interview and Counselor Input Request',
      'This email contains html',
      {htmlBody: htmlForCounselor}
    );

    
  if(recentResponse[0][43]){
    GmailApp.sendEmail(
       engTeacherEmail,
      'SATeam Teacher Input Request',
      'This email contains html',
      {htmlBody: htmlForTeacher}
    );
  }

    
  if(recentResponse[0][44]){
    GmailApp.sendEmail(
       mathTeacherEmail,
      'SATeam Teacher Input Request',
      'This email contains html',
      {htmlBody: htmlForTeacher}
    );
  }

  if(recentResponse[0][45]){

    GmailApp.sendEmail(
       sciTeacherEmail,
      'SATeam Teacher Input Request',
      'This email contains html',
      {htmlBody: htmlForTeacher}
    );
  }

  if(recentResponse[0][46]){

    GmailApp.sendEmail(
       SSTeacherEmail,
      'SATeam Teacher Input Request',
      'This email contains html',
      {htmlBody: htmlForTeacher}
    );
  }

  if(recentResponse[0][47]){

    GmailApp.sendEmail(
       WLTeacherEmail,
      'SATeam Teacher Input Request',
      'This email contains html',
      {htmlBody: htmlForTeacher}
    );  
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
  }
  


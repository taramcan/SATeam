const destinationFolder = DriveApp.getFolderById('1brup3MgG8Sstp7OHN9HO-Y9_9F_NrcHd')

function update300RDocument(studentID){

  for(let i = 0; i < lastRowOf300R; i++){
    if(form300RData[i][4] == studentID){
      var row = i
    }
  }



  if(form300RData[row][0] == ""){
    template = DriveApp.getFileById('1vkcIrt3lm8tqzd9OCTzHv6IqdmUWaRqwnIvpH6hGmaM')
    copy = template.makeCopy(`${form300RData[row][3]} 300R`, destinationFolder)
    doc = DocumentApp.openById(copy.getId())
    
  }
  else{
    existingDoc = form300RData[row][0]
    doc = DocumentApp.openByUrl(existingDoc)
  }

  body = doc.getBody()

  const friendlyDate1 = new Date(form300RData[row][6]).toDateString(); //Intake Date
  const friendlyDate2 = new Date(form300RData[row][9]).toDateString(); //DOB
  

    if(form300RData[row][3]){
    body.replaceText('<Student name>', form300RData[row][3])
    }    
    if(form300RData[row][4]){
    body.replaceText('<LAID>', form300RData[row][4])
    }
    if(form300RData[row][6]){
    body.replaceText('<Intake date>', friendlyDate1)
    }
    if(form300RData[row][7]){
    body.replaceText('<Initial Referrer>', form300RData[row][7])
    }
    if(form300RData[row][8]){
    body.replaceText('<Relationship to child>', form300RData[row][8])
    }
    if(form300RData[row][9]){
    body.replaceText('<DOB>', friendlyDate2)
    }
    if(form300RData[row][10]){
    body.replaceText('<Gender>', form300RData[row][10])
    }
    if(form300RData[row][11]){
    body.replaceText('<Grade>', form300RData[row][11])
    }
    if(form300RData[row][12]){
    body.replaceText('<Racial Identity>', form300RData[row][12])
    }
    if(form300RData[row][13]){
    body.replaceText('<Current Plan>', form300RData[row][13])
    }
    if(form300RData[row][14]){
    body.replaceText('<Parent Name>', form300RData[row][14])
    }
    if(form300RData[row][15]){
    body.replaceText('<Need Translator>', form300RData[row][15])
    }
    if(form300RData[row][16]){
    body.replaceText('<ParentInvolve1>', form300RData[row][16])
    }
    if(form300RData[row][17]){
    body.replaceText('<ParentInvolve2>', form300RData[row][17])
    }
    if(form300RData[row][18]){
    body.replaceText('<ParentInvolve3>', form300RData[row][18])
    }
    if(form300RData[row][19]){
    body.replaceText('<GradeRepeat1>', form300RData[row][19])
    }
    if(form300RData[row][20]){
    body.replaceText('<GradeRepeat2>', form300RData[row][20])
    }
    if(form300RData[row][21]){
    body.replaceText('<Discipline1>', form300RData[row][21])
    }
    if(form300RData[row][22]){
    body.replaceText('<Discipline2>', form300RData[row][22])
    }
    if(form300RData[row][23]){
    body.replaceText('<Attendance>', form300RData[row][23])
    }
    if(form300RData[row][24]){
    body.replaceText('<Reason for request>', form300RData[row][24])
    }
    if(form300RData[row][25]){
    body.replaceText('<Concerns at intake>', form300RData[row][25])
    }
    if(form300RData[row][26]){
    body.replaceText('<Data used to refer>', form300RData[row][26])
    }
    if(form300RData[row][27]){
    body.replaceText('<Hearing>', form300RData[row][27])
    }
    if(form300RData[row][28]){
    body.replaceText('<Vision>', form300RData[row][28])
    }
    if(form300RData[row][29]){
    body.replaceText('<GM>', form300RData[row][29])
    }
    if(form300RData[row][30]){
    body.replaceText('<Writing>', form300RData[row][30])
    }
    if(form300RData[row][31]){
    body.replaceText('<SL>', form300RData[row][31])
    }
    if(form300RData[row][32]){
    body.replaceText('<ReadPer>', form300RData[row][32])
    }
    if(form300RData[row][33]){
    body.replaceText('<LangPer>', form300RData[row][33])
    }
    if(form300RData[row][34]){
    body.replaceText('<MathPer>', form300RData[row][34])
    }
    if(form300RData[row][35]){
    body.replaceText('<CounsInt>', form300RData[row][35])
    }
    if(form300RData[row][36]){
    body.replaceText('<CounsIntCom>', form300RData[row][36])
    }
    if(form300RData[row][37]){
    body.replaceText('<MHPInt>', form300RData[row][37])
    }
    if(form300RData[row][38]){
    body.replaceText('<MHPIntCom>', form300RData[row][38])
    }
    if(form300RData[row][39]){
    body.replaceText('<EngInt>', form300RData[row][39])
    }
    if(form300RData[row][40]){
    body.replaceText('<EngIntCom>', form300RData[row][40])
    }
    if(form300RData[row][41]){
    body.replaceText('<MathInt>', form300RData[row][41])
    }
    if(form300RData[row][42]){
    body.replaceText('<MathIntCom>', form300RData[row][42])
    }
    if(form300RData[row][43]){
    body.replaceText('<SciInt>', form300RData[row][43])
    }
    if(form300RData[row][44]){
    body.replaceText('<SciIntCom>', form300RData[row][44])
    }
    if(form300RData[row][45]){
    body.replaceText('<SSInt>', form300RData[row][45])
    }
    if(form300RData[row][46]){
    body.replaceText('<SSIntCom>', form300RData[row][46])
    }
    if(form300RData[row][47]){
    body.replaceText('<WLInt>', form300RData[row][47])
    }
    if(form300RData[row][48]){
    body.replaceText('<WLIntCom>', form300RData[row][48])
    }
    if(form300RData[row][49]){
    body.replaceText('<InitEng>', form300RData[row][49])
    }
    if(form300RData[row][50]){
    body.replaceText('<InitMath>', form300RData[row][50])
    }
    if(form300RData[row][51]){
    body.replaceText('<InitSci>', form300RData[row][51])
    }
    if(form300RData[row][52]){
    body.replaceText('<InitSS>', form300RData[row][52])
    }
    if(form300RData[row][53]){
    body.replaceText('<InitWL>', form300RData[row][53])
    }
    if(form300RData[row][54]){
    body.replaceText('<EngTeach>', form300RData[row][54])
    }
    if(form300RData[row][55]){
    body.replaceText('<MathTeach>', form300RData[row][55])
    }
    if(form300RData[row][56]){
    body.replaceText('<SciTeach>', form300RData[row][56])
    }
    if(form300RData[row][57]){
    body.replaceText('<SSTeach>', form300RData[row][57])
    }
    if(form300RData[row][58]){
    body.replaceText('<WLTeach>', form300RData[row][58])
    }
    if(form300RData[row][59]){
    body.replaceText('<IntEngage>', form300RData[row][59])
    }
    if(form300RData[row][60]){
    body.replaceText('<IntContent>', form300RData[row][60])
    }
    if(form300RData[row][61]){
    body.replaceText('<IntPerf>', form300RData[row][61])
    }
    if(form300RData[row][62]){
    body.replaceText('<IntSEH>', form300RData[row][62])
    }
    if(form300RData[row][63]){
    body.replaceText('<IntRTI>', form300RData[row][63])
    }
    if(form300RData[row][71]){
    body.replaceText('<CounsIntFU1>', form300RData[row][71])
    }
    if(form300RData[row][72]){
    body.replaceText('<CounsIntComFU1>', form300RData[row][72])
    }
    if(form300RData[row][73]){
    body.replaceText('<MHPIntFU1>', form300RData[row][73])
    }    
    if(form300RData[row][74]){
    body.replaceText('<MHPIntComFU1>', form300RData[row][74])
    }
    if(form300RData[row][75]){
    body.replaceText('<EngIntFU1>', form300RData[row][75])
    }    
    if(form300RData[row][76]){
    body.replaceText('<EngIntComFU1>', form300RData[row][76])
    }
    if(form300RData[row][77]){
    body.replaceText('<MathIntFU1>', form300RData[row][77])
    }
    if(form300RData[row][78]){
    body.replaceText('<MathIntComFU1>', form300RData[row][78])
    }
    if(form300RData[row][79]){
    body.replaceText('<SciIntFU1>', form300RData[row][79])
    }
    if(form300RData[row][80]){
    body.replaceText('<SciIntComFU1>', form300RData[row][80])
    }
    if(form300RData[row][81]){
    body.replaceText('<SSIntFU1>', form300RData[row][81])
    
    }
    if(form300RData[row][82]){
    body.replaceText('<SSIntComFU1>', form300RData[row][82])
    }
    if(form300RData[row][83]){
    body.replaceText('<WLIntFU1>', form300RData[row][83])
    }
    if(form300RData[row][84]){
    body.replaceText('<WLIntComFU1>', form300RData[row][84])
    }
    if(form300RData[row][85]){
    body.replaceText('<Concerns FU1>', form300RData[row][85])
    }
    if(form300RData[row][86]){
    body.replaceText('<FU1Engage>', form300RData[row][86])
    }
    if(form300RData[row][87]){
    body.replaceText('<FU1Content>', form300RData[row][87])
    }
    if(form300RData[row][88]){
    body.replaceText('<FU1Perf>', form300RData[row][88])
    }
    if(form300RData[row][89]){
    body.replaceText('<FU1SEH>', form300RData[row][89])
    }
    if(form300RData[row][90]){
    body.replaceText('<FU1RTI>', form300RData[row][90])
    }
    if(form300RData[row][91]){
    body.replaceText('<FU1Eng>', form300RData[row][91])
    }
    if(form300RData[row][92]){
    body.replaceText('<FU1Math>', form300RData[row][92])
    }
    if(form300RData[row][93]){
    body.replaceText('<FU1Sci>', form300RData[row][93])
    }
    if(form300RData[row][94]){
    body.replaceText('<FU1SS>', form300RData[row][94])
    }
    if(form300RData[row][95]){
    body.replaceText('<FU1WL>', form300RData[row][95])
    }

        if(form300RData[row][101]){
    body.replaceText('<CounsIntFU2>', form300RData[row][101])
    }
    if(form300RData[row][102]){
    body.replaceText('<CounsIntComFU2>', form300RData[row][102])
    }
    if(form300RData[row][103]){
    body.replaceText('<MHPIntFU2>', form300RData[row][103])
    }    
    if(form300RData[row][104]){
    body.replaceText('<MHPIntComFU2>', form300RData[row][104])
    }
    if(form300RData[row][105]){
    body.replaceText('<EngIntFU2>', form300RData[row][105])
    }    
    if(form300RData[row][106]){
    body.replaceText('<EngIntComFU2>', form300RData[row][106])
    }
    if(form300RData[row][107]){
    body.replaceText('<MathIntFU2>', form300RData[row][107])
    }
    if(form300RData[row][108]){
    body.replaceText('<MathIntComFU2>', form300RData[row][108])
    }
    if(form300RData[row][109]){
    body.replaceText('<SciIntFU2>', form300RData[row][109])
    }
    if(form300RData[row][110]){
    body.replaceText('<SciIntComFU2>', form300RData[row][110])
    }
    if(form300RData[row][111]){
    body.replaceText('<SSIntFU2>', form300RData[row][111])
    
    }
    if(form300RData[row][112]){
    body.replaceText('<SSIntComFU2>', form300RData[row][112])
    }
    if(form300RData[row][113]){
    body.replaceText('<WLIntFU2>', form300RData[row][113])
    }
    if(form300RData[row][114]){
    body.replaceText('<WLIntComFU2>', form300RData[row][114])
    }
    if(form300RData[row][115]){
    body.replaceText('<Concerns FU2>', form300RData[row][115])
    }
    if(form300RData[row][116]){
    body.replaceText('<FU2Engage>', form300RData[row][116])
    }
    if(form300RData[row][117]){
    body.replaceText('<FU2Content>', form300RData[row][117])
    }
    if(form300RData[row][118]){
    body.replaceText('<FU2Perf>', form300RData[row][118])
    }
    if(form300RData[row][119]){
    body.replaceText('<FU2SEH>', form300RData[row][119])
    }
    if(form300RData[row][120]){
    body.replaceText('<FU2RTI>', form300RData[row][120])
    }
    if(form300RData[row][121]){
    body.replaceText('<FU2Eng>', form300RData[row][121])
    }
    if(form300RData[row][122]){
    body.replaceText('<FU2Math>', form300RData[row][122])
    }
    if(form300RData[row][123]){
    body.replaceText('<FU2Sci>', form300RData[row][123])
    }
    if(form300RData[row][124]){
    body.replaceText('<FU2SS>', form300RData[row][124])
    }
    if(form300RData[row][125]){
    body.replaceText('<FU2WL>', form300RData[row][125])
    }

    doc.saveAndClose();
    const url = doc.getUrl()    

    sheetFor300R.getRange(row + 1, 1).setValue(url)

    for(let j = 0; j < lastRowOfCoversheet; j++){
      if(studentID == coverData[j][3]){
        coversheet.getRange(j + 1, 6).setValue(url)
      }
  }


}


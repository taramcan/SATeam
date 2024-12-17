//these form 300R column updates are triggered by the UI student ID input


const coversheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SAT Coversheet')
const sheetFor300R = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('For 300R')
const initialReferralSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Initial Referral')
const counsInterviewSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Academic Counselor Interview')
const nurseSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Nurse Screeners')
const teacherSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teacher Input')
const meetingPrefSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teacher meeting preferences')
const fsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Imported F/S List')


const coverData = coversheet.getDataRange().getValues();
const form300RData = sheetFor300R.getDataRange().getValues();
const initialReferralData = initialReferralSheet.getDataRange().getValues();
const counsData = counsInterviewSheet.getDataRange().getValues();
const nurseData = nurseSheet.getDataRange().getValues();
const teacherData = teacherSheet.getDataRange().getValues();
const meetingPreferenceData = meetingPrefSheet.getDataRange().getValues();
const fsInfoData = fsSheet.getDataRange().getValues();

let lastRowOfCoversheet = coversheet.getLastRow()
let lastRowOf300R = sheetFor300R.getLastRow()
let lastRowOfInitialReferral = initialReferralSheet.getLastRow()
let lastRowOfCounsInt = counsInterviewSheet.getLastRow()
let lastRowOfNurse = nurseSheet.getLastRow()
let lastRowOfTeachers = teacherSheet.getLastRow()
let lastRowOfMeetingPref = meetingPrefSheet.getLastRow()
let lastRowOfFsSheet = fsSheet.getLastRow()


//counselor interventions
counsInt1 = counsData[0][22].split(/\[(.+?)\]/g)[1]
counsInt2 = counsData[0][23].split(/\[(.+?)\]/g)[1]
counsInt3 = counsData[0][24].split(/\[(.+?)\]/g)[1]
counsInt4 = counsData[0][25].split(/\[(.+?)\]/g)[1]
counsInt5 = counsData[0][26].split(/\[(.+?)\]/g)[1]
counsInt6 = counsData[0][27].split(/\[(.+?)\]/g)[1]
counsInt7 = counsData[0][28].split(/\[(.+?)\]/g)[1]
counsInt8 = counsData[0][29].split(/\[(.+?)\]/g)[1]
counsInt9 = counsData[0][30].split(/\[(.+?)\]/g)[1]
counsInt10 = counsData[0][31].split(/\[(.+?)\]/g)[1]

//teacher interventions
teachInt1 = teacherData[0][9].split(/\[(.+?)\]/g)[1]
teachInt2 = teacherData[0][10].split(/\[(.+?)\]/g)[1]
teachInt3 = teacherData[0][11].split(/\[(.+?)\]/g)[1]
teachInt4 = teacherData[0][12].split(/\[(.+?)\]/g)[1]
teachInt5 = teacherData[0][13].split(/\[(.+?)\]/g)[1]
teachInt6 = teacherData[0][14].split(/\[(.+?)\]/g)[1]
teachInt7 = teacherData[0][15].split(/\[(.+?)\]/g)[1]
teachInt8 = teacherData[0][16].split(/\[(.+?)\]/g)[1]
teachInt9 = teacherData[0][17].split(/\[(.+?)\]/g)[1]
teachInt10 = teacherData[0][18].split(/\[(.+?)\]/g)[1]
teachInt11 = teacherData[0][19].split(/\[(.+?)\]/g)[1]
teachInt12 = teacherData[0][20].split(/\[(.+?)\]/g)[1]
teachInt13 = teacherData[0][21].split(/\[(.+?)\]/g)[1]
teachInt14 = teacherData[0][22].split(/\[(.+?)\]/g)[1]
teachInt15 = teacherData[0][23].split(/\[(.+?)\]/g)[1]
teachInt16 = teacherData[0][24].split(/\[(.+?)\]/g)[1]
teachInt17 = teacherData[0][25].split(/\[(.+?)\]/g)[1]
teachInt18 = teacherData[0][26].split(/\[(.+?)\]/g)[1]



function getColumnValuesForStudent(studentID){

  

  //get the row where this current student is
  
  for(let i = 0; i < lastRowOf300R; i++){
    if(form300RData[i][4] == studentID){
      row = i
      var studentEmail = (form300RData[i][5]).toString().toLowerCase()
    }
  }


  //if there's nothing in column 0 do all of the below
  if(form300RData[row][1] == "Initial Processing"){

  //look through coversheet for the ID and return necessary values
    for(let i = 0; i < lastRowOfCoversheet; i++){
      if(coverData[i][3] == studentID){
        sheetFor300R.getRange(row + 1, 7).setValue(coverData[i][0])
        sheetFor300R.getRange(row + 1, 4).setValue(coverData[i][2])
        sheetFor300R.getRange(row + 1, 10).setValue(coverData[i][30])
        sheetFor300R.getRange(row + 1, 11).setValue(coverData[i][32])
        sheetFor300R.getRange(row + 1, 12).setValue(coverData[i][4])
        sheetFor300R.getRange(row + 1, 13).setValue(coverData[i][31])
        sheetFor300R.getRange(row + 1, 14).setValue(coverData[i][48])
        sheetFor300R.getRange(row + 1, 15).setValue(coverData[i][13])
        sheetFor300R.getRange(row + 1, 16).setValue(coverData[i][54])
        sheetFor300R.getRange(row + 1, 17).setValue(coverData[i][49])
        sheetFor300R.getRange(row + 1, 24).setValue(coverData[i][58])
        sheetFor300R.getRange(row + 1, 27).setValue(coverData[i][62])
        sheetFor300R.getRange(row + 1, 33).setValue(coverData[i][59])
        sheetFor300R.getRange(row + 1, 34).setValue(coverData[i][60])
        sheetFor300R.getRange(row + 1, 35).setValue(coverData[i][61])
        sheetFor300R.getRange(row + 1, 55).setValue(coverData[i][43])
        sheetFor300R.getRange(row + 1, 56).setValue(coverData[i][44])
        sheetFor300R.getRange(row + 1, 57).setValue(coverData[i][45])
        sheetFor300R.getRange(row + 1, 58).setValue(coverData[i][46])
        sheetFor300R.getRange(row + 1, 59).setValue(coverData[i][47])
        if(coverData[i][49] == "Yes"){
            sheetFor300R.getRange(row + 1, 18).setValue("N/A")
            sheetFor300R.getRange(row + 1, 19).setValue("N/A")
        }
        else{
            sheetFor300R.getRange(row + 1, 18).setValue(coverData[i][52])
            sheetFor300R.getRange(row + 1, 19).setValue(coverData[i][53])
        }
        if(coverData[i][55] == "No (the student does not exhibit a pattern of disciplinary intervention)"){
          sheetFor300R.getRange(row + 1, 22).setValue("No")
          sheetFor300R.getRange(row + 1, 23).setValue("N/A")
        }
        else{
          sheetFor300R.getRange(row + 1, 22).setValue(coverData[i][56])
          sheetFor300R.getRange(row + 1, 23).setValue(coverData[i][57])
        }
      }
    }

    //look through initial referral and get necessary values
    for(let i = 0; i < lastRowOfInitialReferral; i++){
      if((initialReferralData[i][4]).toString().toLowerCase() == studentEmail){
        sheetFor300R.getRange(row + 1, 8).setValue(initialReferralData[i][5])
        sheetFor300R.getRange(row + 1, 9).setValue(initialReferralData[i][6])
        sheetFor300R.getRange(row + 1, 25).setValue(initialReferralData[i][7])
      }
    }

    //look through nurse responses and get necessary values
    for(let i = 0; i < lastRowOfNurse; i++){
      if(nurseData[i][3] == studentID){
        if(nurseData[i][4] != "No screening on file"){
        sheetFor300R.getRange(row + 1, 28).setValue(nurseData[i][4] + ": " + nurseData[0][6])
        sheetFor300R.getRange(row + 1, 29).setValue(nurseData[i][5] + ": " + nurseData[0][7])
        }
        else{
          sheetFor300R.getRange(row + 1, 28).setValue("No screening on file.")
          sheetFor300R.getRange(row + 1, 29).setValue("No screening on file.")
        }
      }
    }
  }
  ////////////////////everything above here is done only once, when there is no 300R generated

  ////////////////////everything below here will vary based on the iteration (initial, Gen1, Gen2)

  //get info from counselors

  for(let i = 1; i < lastRowOfCounsInt; i++){
    //the if statement below compares the student ID and the data that the data was returned. only data with a date later than the last time the 300-R was populated is added
    if(counsData[i][3] == studentID && counsData[i][0] > form300RData[row][2]){
        if(form300RData[row][1] == "Initial Processing"){
          sheetFor300R.getRange(row + 1, 20).setValue(counsData[i][20])
          sheetFor300R.getRange(row + 1, 37).setValue(counsData[i][18])
          if(counsData[i][20] == "No" || counsData[i][20] == "Unknown"){
            sheetFor300R.getRange(row + 1, 21).setValue("N/A")
          }
          else{
            sheetFor300R.getRange(row + 1, 21).setValue(counsData[i][21])
          }
        }
        else if(form300RData[row][1] == "Gen 1"){
          sheetFor300R.getRange(row + 1, 73).setValue(counsData[i][18])
        }
        else if(form300RData[row][1] == "Gen 2"){
          sheetFor300R.getRange(row + 1, 97).setValue(counsData[i][18])

        }
      }
    }

    var concerns = new Array ()
    counsConcerns = getCounsConcerns(studentID, row)      
    concerns.push(counsConcerns)
    teachConcerns = getTeachConcerns(studentID, row)
    concerns.push(teachConcerns)
    concerns = concerns.join().toString()
    if(form300RData[row][1] == "Initial Processing"){
      sheetFor300R.getRange(row + 1, 26).setValue(concerns)
    }
    else if(form300RData[row][1] == "Gen 1"){
      sheetFor300R.getRange(row + 1, 86).setValue(concerns)
    }
    else if(form300RData[row][1] == "Gen 2"){
      sheetFor300R.getRange(row + 1, 116).setValue(concerns)
    }

    if(form300RData[row][1] == "Initial Processing"){
      if(concerns.indexOf("clumsiness") >=0){
        //this will flag gross motor if any teacher reported that clumsiness is a concern
          sheetFor300R.getRange(row + 1, 30).setValue("Yes")
      }
      else {
        sheetFor300R.getRange(row + 1, 30).setValue("No")
      }
      if(concerns.indexOf("handwriting") >=0){
        //this will flag fine motor skills if any teacher indicated that handwriting was a concern
        sheetFor300R.getRange(row + 1, 31).setValue("Yes")
      }
      else {
        sheetFor300R.getRange(row + 1, 31).setValue("No")
      }
      if(concerns.indexOf("stuttering") >=0){
        //this will flag speech language if any teahcer indicated stuttering is a concern
        sheetFor300R.getRange(row + 1, 32).setValue("Yes")
      }
      else {
        sheetFor300R.getRange(row + 1, 32).setValue("No")
      }
    }

    for(let i = 1; i < lastRowOfCounsInt; i++){
      if(studentID == counsData[i][3] && counsData[i][0] > form300RData[row][2]){

        var counsInterventions = ""

        if(counsData[i][22] != "Not implemented"){counsInterventions = counsInterventions + counsInt1 + ": (" + counsData[i][22] + "), "}
        if(counsData[i][23] != "Not implemented"){counsInterventions = counsInterventions + counsInt2 + ": (" + counsData[i][23] + "), "}
        if(counsData[i][24] != "Not implemented"){counsInterventions = counsInterventions + counsInt3 + ": (" + counsData[i][24] + "), "}
        if(counsData[i][25] != "Not implemented"){counsInterventions = counsInterventions + counsInt4 + ": (" + counsData[i][25] + "), "}
        if(counsData[i][26] != "Not implemented"){counsInterventions = counsInterventions + counsInt5 + ": (" + counsData[i][26] + "), "}
        if(counsData[i][27] != "Not implemented"){counsInterventions = counsInterventions + counsInt6 + ": (" + counsData[i][27] + "), "}
        if(counsData[i][28] != "Not implemented"){counsInterventions = counsInterventions + counsInt7 + ": (" + counsData[i][28] + "), "}
        if(counsData[i][29] != "Not implemented"){counsInterventions = counsInterventions + counsInt8 + ": (" + counsData[i][29] + "), "}
        if(counsData[i][30] != "Not implemented"){counsInterventions = counsInterventions + counsInt9 + ": (" +   counsData[i][30] + "), "}
        if(counsData[i][31] != "Not implemented"){counsInterventions = counsInterventions + counsInt10 + ": (" + counsData[i][31] + "), "}

        if(form300RData[row][1] == "Initial Processing"){
        sheetFor300R.getRange(row + 1, 36).setValue(counsInterventions)
        }
        
        else if(form300RData[row][1] == "Gen 1"){
        sheetFor300R.getRange(row + 1, 72).setValue(counsInterventions)
        }
        
        else if(form300RData[row][1] == "Gen 2"){
        sheetFor300R.getRange(row + 1, 102).setValue(counsInterventions)
        }
      }
    }

      let engInterventions = ""
      let mathInterventions = ""
      let sciInterventions = ""
      let SSInterventions = ""
      let WLInterventions = ""

        for(let i = 1; i < lastRowOfTeachers; i++){
          if(studentID == teacherData[i][3] && teacherData[i][0] > form300RData[row][2]){
            if(teacherData[i][4] == "English"){
              if(form300RData[row][1] == "Initial Processing"){
                sheetFor300R.getRange(row + 1, 41).setValue(teacherData[i][28]) // says mathInt
                sheetFor300R.getRange(row + 1, 50).setValue(teacherData[i][29])   //says initMath 
              }
              else if(form300RData[row][1] == "Gen 1"){
                sheetFor300R.getRange(row + 1, 77).setValue(teacherData[i][28])  // says mathIntFU1
                sheetFor300R.getRange(row + 1, 92).setValue(teacherData[i][29])  // says FU1 math
              }
              else if(form300RData[row][1] == "Gen 2"){
                sheetFor300R.getRange(row + 1, 107).setValue(teacherData[i][28]) //says mathIntFU2
                sheetFor300R.getRange(row + 1, 122).setValue(teacherData[i][29]) //says fu2math
              }
            }
            else if(teacherData[i][4] == "Math") {
              if(form300RData[row][1] == "Initial Processing"){
                sheetFor300R.getRange(row + 1, 43).setValue(teacherData[i][28])  //says sciInt
                sheetFor300R.getRange(row + 1, 51).setValue(teacherData[i][29]) //says initsci
              }
              else if(form300RData[row][1] == "Gen 1"){
                sheetFor300R.getRange(row + 1, 79).setValue(teacherData[i][28]) //says sciIntFU1
                sheetFor300R.getRange(row + 1, 93).setValue(teacherData[i][29]) //says fu1sci
              }
              else if(form300RData[row][1] == "Gen 2"){
                sheetFor300R.getRange(row + 1, 109).setValue(teacherData[i][28])  //says sciintfu2
                sheetFor300R.getRange(row + 1, 123).setValue(teacherData[i][29])  //says fu2sci
              }
            }

            else if(teacherData[i][4] == "Science") {
              if(form300RData[row][1] == "Initial Processing"){
                sheetFor300R.getRange(row + 1, 45).setValue(teacherData[i][28]) //says ssInt
                sheetFor300R.getRange(row + 1, 52).setValue(teacherData[i][29])  //says initSS
              }
              else if(form300RData[row][1] == "Gen 1"){
                sheetFor300R.getRange(row + 1, 81).setValue(teacherData[i][28])  //says SSIntFU1
                sheetFor300R.getRange(row + 1, 94).setValue(teacherData[i][29])  //says fu1ss

              }
              else if(form300RData[row][1] == "Gen 2"){
                sheetFor300R.getRange(row + 1, 111).setValue(teacherData[i][28]) //says SSIntFU2
                sheetFor300R.getRange(row + 1, 124).setValue(teacherData[i][29]) //says fu2SS
              }
            }


            else if(teacherData[i][4] == "Social Studies") {
              if(form300RData[row][1] == "Initial Processing"){
                sheetFor300R.getRange(row + 1, 47).setValue(teacherData[i][28]) //says WLint
                sheetFor300R.getRange(row + 1, 53).setValue(teacherData[i][29])  //says InitWL
              }
              else if(form300RData[row][1] == "Gen 1"){
                sheetFor300R.getRange(row + 1, 83).setValue(teacherData[i][28])  //says WLIntFU1
                sheetFor300R.getRange(row + 1, 95).setValue(teacherData[i][29])  //says FU1WL
              }
              else if(form300RData[row][1] == "Gen 2"){
                sheetFor300R.getRange(row + 1, 113).setValue(teacherData[i][28])  //says WLIntFU2
                sheetFor300R.getRange(row + 1, 125).setValue(teacherData[i][29])  //says FU2WL
              }
            } 

            else if(teacherData[i][4] == "World Language") {
              if(form300RData[row][1] == "Initial Processing"){
                sheetFor300R.getRange(row + 1, 49).setValue(teacherData[i][28])  //says initEng
                sheetFor300R.getRange(row + 1, 54).setValue(teacherData[i][29])  //says EngTeach
              }
              else if(form300RData[row][1] == "Gen 1"){
                sheetFor300R.getRange(row + 1, 85).setValue(teacherData[i][28])  //says concernsFU1
                sheetFor300R.getRange(row + 1, 96).setValue(teacherData[i][29])  //first blank column
              }
              else if(form300RData[row][1] == "Gen 2"){
                sheetFor300R.getRange(row + 1, 115).setValue(teacherData[i][28])  //concerns fu2
                sheetFor300R.getRange(row + 1, 126).setValue(teacherData[i][29])  //first blank column
              }
            }

            if(teacherData[i][9] != "Not implemented"){

              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt1 + ": (" + teacherData[i][9] + "), "
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt1 + ": (" + teacherData[i][9] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt1 + ": (" + teacherData[i][9] + "), ";
              }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt1 + ": (" + teacherData[i][9] + "), ";
              }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt1 + ": (" + teacherData[i][9] + "), " ;
              }
            }
        
            if(teacherData[i][10] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt2 + ": (" + teacherData[i][10] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt2 + ": (" + teacherData[i][10] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt2 + ": (" + teacherData[i][10] + "), ";
              }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt2 + ": (" + teacherData[i][10] + "), ";
              }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt2 + ": (" + teacherData[i][10] + "), " ;   
              }
            }

            if(teacherData[i][11] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt3 + ": (" + teacherData[i][11] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt3 + ": (" + teacherData[i][11] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt3 + ": (" + teacherData[i][11] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt3 + ": (" + teacherData[i][11] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt3 + ": (" + teacherData[i][11] + "), " ;   
              }
            }

            if(teacherData[i][12] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt4 + ": (" + teacherData[i][12] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt4 + ": (" + teacherData[i][12] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt4 + ": (" + teacherData[i][12] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt4 + ": (" + teacherData[i][12] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt4 + ": (" + teacherData[i][12] + "), " ;   
              }
            }

            if(teacherData[i][13] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt5 + ": (" + teacherData[i][13] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt5 + ": (" + teacherData[i][13] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt5 + ": (" + teacherData[i][13] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt5 + ": (" + teacherData[i][13] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt5 + ": (" + teacherData[i][13] + "), " ;   
              }
            }

            if(teacherData[i][14] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt6 + ": (" + teacherData[i][14] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt6 + ": (" + teacherData[i][14] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt6 + ": (" + teacherData[i][14] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt6 + ": (" + teacherData[i][14] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt6 + ": (" + teacherData[i][14] + "), " ;   
              }           
            }

            if(teacherData[i][15] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt7 + ": (" + teacherData[i][15] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt7 + ": (" + teacherData[i][15] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt7 + ": (" + teacherData[i][15] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt7 + ": (" + teacherData[i][15] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt7 + ": (" + teacherData[i][15] + "), " ;   
              }          
            }

            if(teacherData[i][16] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt8 + ": (" + teacherData[i][16] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt8 + ": (" + teacherData[i][16] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt8 + ": (" + teacherData[i][16] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt8 + ": (" + teacherData[i][16] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt8 + ": (" + teacherData[i][16] + "), " ;   
              }
            }

            if(teacherData[i][17] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt9 + ": (" + teacherData[i][17] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt9 + ": (" + teacherData[i][17] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt9 + ": (" + teacherData[i][17] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt9 + ": (" + teacherData[i][17] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt9 + ": (" + teacherData[i][17] + "), " ;   
              }
            }

            if(teacherData[i][18] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt10 + ": (" + teacherData[i][18] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt10 + ": (" + teacherData[i][18] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt10 + ": (" + teacherData[i][18] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt10 + ": (" + teacherData[i][18] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt10 + ": (" + teacherData[i][18] + "), " ;   
              }
            }

            if(teacherData[i][19] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt11 + ": (" + teacherData[i][19] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt11 + ": (" + teacherData[i][19] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt11 + ": (" + teacherData[i][19] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt11 + ": (" + teacherData[i][19] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt11 + ": (" + teacherData[i][19] + "), " ;   
              }
            }

            if(teacherData[i][20] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt12 + ": (" + teacherData[i][20] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt12 + ": (" + teacherData[i][20] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt12 + ": (" + teacherData[i][20] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt12 + ": (" + teacherData[i][20] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt12 + ": (" + teacherData[i][20] + "), " ;   
              }
            }

            if(teacherData[i][21] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt13 + ": (" + teacherData[i][21] + "), "; 
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt13 + ": (" + teacherData[i][21] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt13 + ": (" + teacherData[i][21] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt13 + ": (" + teacherData[i][21] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt13 + ": (" + teacherData[i][21] + "), " ;   
              }
            }

            if(teacherData[i][22] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt14 + ": (" + teacherData[i][22] + "), ";}
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt14 + ": (" + teacherData[i][22] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt14 + ": (" + teacherData[i][22] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt14 + ": (" + teacherData[i][22] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt14 + ": (" + teacherData[i][22] + "), " ;   
              }
            }

            if(teacherData[i][23] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt15 + ": (" + teacherData[i][23] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt15 + ": (" + teacherData[i][23] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt15 + ": (" + teacherData[i][23] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt15 + ": (" + teacherData[i][23] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt15 + ": (" + teacherData[i][23] + "), " ;   
              }
            }

            if(teacherData[i][24] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt16 + ": (" + teacherData[i][24] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt16 + ": (" + teacherData[i][24] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt16 + ": (" + teacherData[i][24] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt16 + ": (" + teacherData[i][24] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt16 + ": (" + teacherData[i][24] + "), " ;   
              }
            }

            if(teacherData[i][25] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt17 + ": (" + teacherData[i][25] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt17 + ": (" + teacherData[i][25] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt17 + ": (" + teacherData[i][25] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt17 + ": (" + teacherData[i][25] + "), ";
                }
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt17 + ": (" + teacherData[i][25] + "), " ;   
              }
            }

            if(teacherData[i][26] != "Not implemented"){
              if(teacherData[i][4] == "English"){
                engInterventions = engInterventions + teachInt18 + ": (" + teacherData[i][26] + "), ";
              }
              if(teacherData[i][4] == "Math"){
                mathInterventions = mathInterventions + teachInt18 + ": (" + teacherData[i][26] + "), ";
              }
              if(teacherData[i][4] == "Science"){
                sciInterventions = sciInterventions + teachInt18 + ": (" + teacherData[i][26] + "), ";
                            }
              if(teacherData[i][4] == "Social Studies"){
                SSInterventions = SSInterventions + teachInt18 + ": (" + teacherData[i][26] + "), ";}
              if(teacherData[i][4] == "World Language"){
                WLInterventions = WLInterventions + teachInt18 + ": (" + teacherData[i][26] + "), " ;
              }           
            }
          }
        }
      if(form300RData[row][1] == "Initial Processing"){
        sheetFor300R.getRange(row + 1, 40).setValue(engInterventions)
        sheetFor300R.getRange(row + 1, 42).setValue(mathInterventions)
        sheetFor300R.getRange(row + 1, 44).setValue(sciInterventions)
        sheetFor300R.getRange(row + 1, 46).setValue(SSInterventions)
        sheetFor300R.getRange(row + 1, 48).setValue(WLInterventions)            
      }
      else if(form300RData[row][1] == "Gen 1"){
        sheetFor300R.getRange(row + 1, 76).setValue(engInterventions)  //says engIntComFU1
        sheetFor300R.getRange(row + 1, 78).setValue(mathInterventions)
        sheetFor300R.getRange(row + 1, 80).setValue(sciInterventions)
        sheetFor300R.getRange(row + 1, 82).setValue(SSInterventions)
        sheetFor300R.getRange(row + 1, 84).setValue(WLInterventions)
      }
      else if(form300RData[row][1] == "Gen 2"){
        sheetFor300R.getRange(row + 1, 106).setValue(engInterventions)  
        sheetFor300R.getRange(row + 1, 108).setValue(mathInterventions)
        sheetFor300R.getRange(row + 1, 110).setValue(sciInterventions)
        sheetFor300R.getRange(row + 1, 112).setValue(SSInterventions)
        sheetFor300R.getRange(row + 1, 114).setValue(WLInterventions)
      }
      
      let responseCount = 0
      let engagement = 0
      let mastery = 0
      let performance = 0
      let socEmoHealth = 0

      for(let i = 1; i < lastRowOfTeachers; i++){
        if(teacherData[i][3] == studentID && teacherData[i][0] > form300RData[row][2]){
          responseCount ++
          engagement = engagement + teacherData[i][5]
          mastery = mastery + teacherData[i][6]
          performance = performance + teacherData[i][7]
          socEmoHealth = socEmoHealth + teacherData[i][8]
        }
      }
      engagement = (engagement/responseCount).toFixed(2)
      mastery = (mastery/responseCount).toFixed(2)
      performance = (performance/responseCount).toFixed(2)
      socEmoHealth = (socEmoHealth/responseCount).toFixed(2)

      if(form300RData[row][1] == "Initial Processing"){
        sheetFor300R.getRange(row + 1, 60).setValue(engagement)
        sheetFor300R.getRange(row + 1, 61).setValue(mastery)
        sheetFor300R.getRange(row + 1, 62).setValue(performance)
        sheetFor300R.getRange(row + 1, 63).setValue(socEmoHealth)         
      }
      else if(form300RData[row][1] == "Gen 1"){
        sheetFor300R.getRange(row + 1, 87).setValue(engagement)
        sheetFor300R.getRange(row + 1, 88).setValue(mastery)
        sheetFor300R.getRange(row + 1, 89).setValue(performance)
        sheetFor300R.getRange(row + 1, 90).setValue(socEmoHealth)
      }
      else if(form300RData[row][1] == "Gen 2"){
        sheetFor300R.getRange(row + 1, 117).setValue(engagement)
        sheetFor300R.getRange(row + 1, 118).setValue(mastery)
        sheetFor300R.getRange(row + 1, 119).setValue(performance)
        sheetFor300R.getRange(row + 1, 120).setValue(socEmoHealth)
      }

      let counsNotImplemented = getCounsNotImplemented(studentID, row)
      let counsRTI = getCounsRTI(studentID, row)  
      let teacherCount = getTeacherCount(studentID, row)  
      let teachNotImplemented = getTeachNotImplemented(studentID, row)
      let teachRTI = getTeachRTI(studentID, row)

      var rti = ((counsRTI + teachRTI)/(((18*teacherCount) - teachNotImplemented) + (10 - counsNotImplemented))).toFixed(2)
      
      if(form300RData[row][1] == "Initial Processing"){
        sheetFor300R.getRange(row + 1, 64).setValue(rti)
      }
      else if(form300RData[row][1] == "Gen 1"){
        sheetFor300R.getRange(row + 1, 91).setValue(rti)
      }
      else if(form300RData[row][1] == "Gen 2"){
        sheetFor300R.getRange(row + 1, 121).setValue(rti)
      }

}

function getCounsConcerns(studentID, row){
  //if column 0 is empty grab the first answer
  //else grab the answer that is after the date in column 2
  let counsConcerns = new Array()
  for(let i = 1; i < lastRowOfCounsInt; i++){
    if(counsData[i][3] == studentID && counsData[i][0] > form300RData[row][2]){
      if(counsData[i][19] != "My interactions with the student did not reveal that any of the above are concerns."){
      counsConcerns.push(counsData[i][19])
      return counsConcerns
      }
    }
  }
}

function getTeachConcerns(studentID, row){
  //if column 0 is empty grab the first answer
  //else grab the answer that is after the date in column 2
  var teachConcerns = new Array()
  for(let i = 1; i < lastRowOfTeachers; i++){
    if(teacherData[i][3] == studentID && teacherData[i][0] > form300RData[row][2]){
      if(teacherData[i][27] != "My interactions with the student did not reveal that any of the above are concerns."){
      teachConcerns.push(teacherData[i][27])
      }
    }
  }
  return teachConcerns
}

function getCounsNotImplemented(studentID, row){
  let notImplemented = 0
  for(let j = 1; j < lastRowOfCounsInt; j++){
    if(counsData[j][3] == studentID && counsData[j][0] > form300RData[row][2]){
      for(let k = 22; k < 32; k++){
        if(counsData[j][k] == "Not implemented"){
          notImplemented = notImplemented + 1
        }
      }
    }
  }
  return notImplemented
}
function getCounsRTI(studentID, row){
  let rti = 0
  let verySuccessful = 0
  let helpsSomewhat = 0
  let makesProblemWorse = 0
  for(let j = 1; j < lastRowOfCounsInt; j++){
    if(counsData[j][3] == studentID && counsData[j][0] > form300RData[row][2]){
      for(let k = 22; k < 32; k++){
        if(counsData[j][k] == "Very successful"){
          verySuccessful ++
        }
        else if(counsData[j][k] == "Helps somewhat"){
          helpsSomewhat ++
        }
        else if(counsData[j][k] == "Makes problem worse"){
          makesProblemWorse ++
        }
      }
    }
  }
  rti = (verySuccessful*2) + helpsSomewhat - (makesProblemWorse*2)
  return rti
}
function getTeacherCount(studentID, row){
  let count = 0
  for(let j = 1; j < lastRowOfTeachers; j++){
    if(teacherData[j][3] == studentID && teacherData[j][0] > form300RData[row][2]){
      count ++
    }
  }
  return count
}
function getTeachNotImplemented(studentID, row){
  let notImplemented = 0
  for(let j = 1; j < lastRowOfTeachers; j++){
    if(teacherData[j][3] == studentID && teacherData[j][0] > form300RData[row][2]){
      for(let k = 9; k < 27; k++){
        if(teacherData[j][k] == "Not implemented"){
          notImplemented = notImplemented + 1
        }
      }
    }
  }
  return notImplemented
}
function getTeachRTI(studentID, row){
  let rti = 0
  let verySuccessful = 0
  let helpsSomewhat = 0
  let makesProblemWorse = 0
  for(let j = 1; j < lastRowOfTeachers; j++){
    if(teacherData[j][3] == studentID && teacherData[j][0] > form300RData[row][2]){
      for(let k = 9; k < 27; k++){
        if(teacherData[j][k] == "Very successful"){
          verySuccessful ++
        }
        else if(teacherData[j][k] == "Helps somewhat"){
          helpsSomewhat ++
        }
        else if(teacherData[j][k] == "Makes problem worse"){
          makesProblemWorse ++
        }
      }
    }
  }
  rti = (verySuccessful*2) + helpsSomewhat - (makesProblemWorse*2)
  return rti
}
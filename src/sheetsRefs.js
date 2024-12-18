const sheet1 = "SAT Coversheet";
const sheet5 = "For 300R";
const sheet3 = "Initial Referral";
const sheet4 = "Academic Counselor Interview";
const sheet6 = "Nurse Screeners";
const sheet2 = "Teacher Input";
const sheet8 = "Teacher meeting preferences";
const sheet7 = "Imported F/S List";

const coversheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet1);
const dataFor300R = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet5);
const initialReferralSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet3);
const counsInterviewSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet4);
const nurseInputSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet6);
const teacherInputSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet2);
const meetingPrefSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet8);
const fsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet7);

const coverData = coversheet.getDataRange().getValues();
const form300RData = dataFor300R.getDataRange().getValues();
const initialReferralData = initialReferralSheet.getDataRange().getValues();
const counsData = counsInterviewSheet.getDataRange().getValues();
const nurseData = nurseInputSheet.getDataRange().getValues();
const teacherData = teacherInputSheet.getDataRange().getValues();
const meetingPreferenceData = meetingPrefSheet.getDataRange().getValues();
const fsInfoData = fsSheet.getDataRange().getValues();

let lastRowOfCoversheet = coversheet.getLastRow();
let lastRowOf300R = dataFor300R.getLastRow();
let lastRowOfInitialReferral = initialReferralSheet.getLastRow();
let lastRowOfCounsInt = counsInterviewSheet.getLastRow();
let lastRowOfNurse = nurseInputSheet.getLastRow();
let lastRowOfTeachers = teacherInputSheet.getLastRow();
let lastRowOfMeetingPref = meetingPrefSheet.getLastRow();
let lastRowOfFsSheet = fsSheet.getLastRow();
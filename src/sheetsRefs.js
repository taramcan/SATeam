const coversheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SAT Coversheet');
const dataFor300R = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('For 300R');
const initialReferralSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Initial Referral');
const counsInterviewSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Academic Counselor Interview');
const nurseInputSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Nurse Screeners');
const teacherInputSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teacher Input');
const meetingPrefSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Teacher meeting preferences');
const fsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Imported F/S List');

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
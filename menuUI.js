function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('SATeam Workflow');
  menu.addItem('Compile data fror 300R', 'populate300R')
  menu.addItem('Populate 300R', 'populate300RDocument')
  menu.addItem('Send Request for FollowUp Data', 'followUpEmailInputRequest')
  menu.addToUi();
}

/**
* Package list details
*/
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/19jUGiHWACHBLq8f_myB062iLSh1SU_VL_8oxFJz5_ak/edit#gid=0';

var sheetrockResultsList = Handlebars.compile($('#packageList').html());

$('#resultsList').sheetrock({
  url: mySpreadsheet,
  query: 'select A,B,C,D,E,F,G,H',
  callback : makeSortable
});

function makeSortable(error, options, response) {
  // Target is not a jQuery object, so we need to call jQuery
  // explicitly.
  $(options.user.target).DataTable();
  $('table').DataTable();
}




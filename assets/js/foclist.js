 /**
   * FOC details
   */
 
    var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/15Q_ayDcFhYsRuvwpviUh1Fayv_fr7Ld5-WrDl9ayLXg/edit#gid=0';

    var sheetrockResultsList = Handlebars.compile($('#focList').html());
    
    $('#resultsList2').sheetrock({
      url: mySpreadsheet,
      query: 'select A,B,C,D,E',
      callback : makeSortable2
    });
    
    function makeSortable2(error, options, response) {
      // Target is not a jQuery object, so we need to call jQuery
      // explicitly.
      $(options.user.target).DataTable();
    }

    $('table').DataTable();
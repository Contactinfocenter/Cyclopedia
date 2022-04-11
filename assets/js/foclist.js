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

     /**
   * FOC details mine
   */
      $(document).ready( function () {
        $.getJSON( "https://script.google.com/macros/s/AKfycbw7QDsQaA1l5-qe4ZsqgxVFj85_LaZe7tUk-y9UKilGebTOHJIU/exec", function( data ) {
        var table = $('#foclist').DataTable({
          responsive: true,
          data: data,
          
                  columns: [
                    {data: 'sl'},
                    {data: 'client'},
                    {data: 'contact'},
                    {data: 'cid'}
                  ]
      
                });
      } );
      });
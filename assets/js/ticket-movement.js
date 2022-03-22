$(function(){
	$(".table-responsive").css({ opacity:'0'});

$.ajax({
	type:"GET",
	url:"https://cdnjs.cloudflare.com/ajax/libs/jquery-sheetrock/1.1.4/dist/sheetrock.min.js",
	success:function(){

//conferenceCallback
var conferenceCallback = function (error, options, response) {
	if (!error) {/*Parse response.data, loop through response.rows, or do something with response.html.*/}

	setTimeout(function () {
		//$('.table-loading').removeClass('loadingBG');

		$(".table > tbody > tr > td:first-child").css({"min-width":"150px","text-align":"center"});
		//wrapInTag
		$.fn.wrapInTag = function (opts) {
		    function getText(obj) {
		        return obj.textContent ? obj.textContent : obj.innerText;
		    }
		    var tag = opts.tag || 'span',
		        words = opts.words || [],
		        regex = RegExp(words.join('|'), 'gi'),
		        replacement = '<' + tag + '>$&</' + tag + '>';
		    $(this).contents().each(function () {
		        if (this.nodeType === 3) //Node.TEXT_NODE
		        {
		            $(this).replaceWith(getText(this).replace(regex, replacement));
		        }
		        else if (!opts.ignoreChildNodes) {
		            $(this).wrapInTag(opts);
		        }
		    });
		};
		$('td').wrapInTag({"words" : ["Keynote Queue:"]});
		$("td > span").css({"color":"#ad8605","text-transform":"","font-size":"80%"});
		//wrapInTag2
		$.fn.wrapInTag2 = function (opts) {
		    function getText(obj) {
		        return obj.textContent ? obj.textContent : obj.innerText;
		    }
		    var tag = opts.tag || 'i',
		        words = opts.words || [],
		        regex = RegExp(words.join('|'), 'gi'),
		        replacement = '<' + tag + '>$&</' + tag + '>';
		    $(this).contents().each(function () {
		        if (this.nodeType === 3) //Node.TEXT_NODE
		        {
		            $(this).replaceWith(getText(this).replace(regex, replacement));
		        }
		        else if (!opts.ignoreChildNodes) {
		            $(this).wrapInTag2(opts);
		        }
		    });
		};
		$('td').wrapInTag2({"words" : ["Queue","SLA","Types of complain/request","Owner"]});
		$("td > i").css({"color":"#fff","text-transform":"","font-weight":"bold"}).closest("tr").css("background-color","#ff6666");
		//Add html <br />
		$("td:contains('--')").html(function(_, html) {
			return  html.replace(/(--)/g, '<br />')
		});
		//Bold Markup #text#
		$('table').children().each(function(){
			$(this).html( 
	        	$(this).html().replace(/#(.*?)#/gm,'<strong>$1</strong>')
			);
		});
		//Sponsor Markup %text%
		$('table').children().each(function(){
			$(this).html( 
	        	$(this).html().replace(/``(.*?)``/gm,'<em class="txt-accent">$1</em>')
			);
		});

		//Show/Hide Table based on 
			if ($("table#gdrive_conference tr:nth-child(1) td").text().length > 0) {
				$(".table-responsive").delay(500).animate({ opacity: "1" }, { duration: 250, easing: "linear" });
				//console.log("content");
			} else if ($("table#gdrive_conference tr:nth-child(1) td").text().length == 0) {
				$(".table-responsive").hide();
				//console.log("empty");
			}
    
	}, 150);//timeout

};//conferenceCallback

	var conferenceSpreadsheet = "https://docs.google.com/spreadsheets/d/1VPC2mxhZ3D2g3qWf0MKeA2MoqU3ZLxVFTmAbDzOIxsE/edit#gid=636443014";
	
	$("#gdrive_conference").sheetrock({
		url: conferenceSpreadsheet,
	  query: "select A,B,C,D",
		headersOff: false,
		callback: conferenceCallback
	});
    
	},//end success:function
	dataType:"script",
	cache: true
});		
		
});//end function
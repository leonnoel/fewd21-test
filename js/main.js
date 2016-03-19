$(document).ready(function() {
  /*$.ajax({
    'url' : 'http://cors.io/?u=http://en.wikipedia.org/wiki/Anfield',
    'type' : 'GET',
    'success' : function(data) {
       var dataObj = JSON.parse(data)
       console.log(dataObj);
      $("pre").append(dataObj.horoscope);
      
    }
  });*/
$.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('https://en.wikipedia.org/wiki/Anfield') + '&callback=?', function(data){
	var dataObj = data;
	console.log(dataObj);
    console.log(dataObj.contents);
    $("html").html(dataObj.contents);
    $('img').each(function() {

    	/*$(this).attr("src",  "");
		setTimeout(function(){
		    $(this).attr("src", "https:" + $(this).attr("src") + '?' + Math.random() ); //the new image src
		}, 0);*/
    	//$(this).attr("src", "https:" + $(this).attr("src") + '?' + Math.random() );
    	//$(this).load();
	});

});
    
});
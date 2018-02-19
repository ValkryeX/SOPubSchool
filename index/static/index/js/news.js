$(document).ready(function(){
  
  var news1 = 'News #1 ' + '<strong>' + '<a href="#" target="_blank">' 
		+	'Example 1' + '</a>' + '</strong>';
  
  var news2 = 'News #2 ' + '<strong>' + '<a href="#" target="_blank">' 
		+	'Example 2' + '</a>' + '</strong>';
  
  var news3 = 'News #3' + '<strong>' + '<a href="#" target="_blank">' +
		 'Example 3' + '</a>' + '</strong>';
  
  var news4 = 'News #4' + '<strong>' + '<a href="Link #4" target="_blank">' + 'Example 4' + '</a>' + '</strong>';
  
  
  // array that contains the variables with the info that you wan to display
  
  var newsFeed = [news1,news2,news3,news4];

    // incrementer for the array index
    var incrementedIndex = 0;
  
    // in case you want to randomize your entries. Just use this variable
    // instead of incrementer
    /*var randomIndex = Math.floor(Math.random() * newsFeed.length);*/
  
    function newsFeedLoop(){
        
        //makes paragraph dissapear before the looping start. Also allows
        // the fadeIn effect to take in
        $('#news_feed').css('display', 'none');
      
        //select array elements index into the page 
        $('#suggestions').html(newsFeed[incrementedIndex]); 

        // Fade in the news in two seconds. Then holds it for 10 seconds
        // then fades out in 2 seconds. Finally the function to call itself
        $('#news_feed').fadeIn(1000).delay(3000).fadeOut(1000, newsFeedLoop);
	 
        // add one to the incrementer
        incrementedIndex++
        
        // if the incrementer reaches the lenght of the array, get restarted
        if (incrementedIndex === newsFeed.length){
          
	           incrementedIndex = 0;
        }
	 }
  
  // call the function
	newsFeedLoop();
  
}) // end document.ready

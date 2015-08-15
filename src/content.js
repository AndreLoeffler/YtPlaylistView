chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
	var videos = document.getElementsByClassName('watched-badge');
    if (msg.text && (msg.text == "show")) {
    	/*
    	var button = document.getElementsByClassName('load-more-button');
    	button[0].click();
    	 */
    	
		for (var i = 0 ; i < videos.length ; i++) {
			//div    > a           > span        > td          > tr 
			videos[i].parentElement.parentElement.parentElement.parentElement.style.display = 'block';
		}
		
        sendResponse();
    }
    if (msg.text && (msg.text == "hide")) {
    	
		for (var i = 0 ; i < videos.length ; i++) {
			//div    > a           > span        > td          > tr
			videos[i].parentElement.parentElement.parentElement.parentElement.style.display = 'none';
		}
		
        sendResponse();
    }
});
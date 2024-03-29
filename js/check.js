function loadMScript(url) {
    var script = document.createElement('script');
    script.src = url;
    
    // Select the div where the script will be nested
    var scriptContainer = document.getElementById('mScript');

    // Append the new script to the selected div
    scriptContainer.appendChild(script);
}

function loadDScript(url) {
    var script = document.createElement('script');
    script.src = url;
    
    // Select the div where the script will be nested
    var scriptContainer = document.getElementById('dScript');

    // Append the new script to the selected div
    scriptContainer.appendChild(script);
}

function checkWindowSize() {
    var width = window.innerWidth;

    // If the window width is 500px or less, load script1.js
    if (width <= 999) {
        loadMScript('js/mainm.js');
        loadCSS("css/indexm.css");
    } 
    // If the window width is more than 500px, load script2.js
    else {
        loadDScript('js/main.js');
		loadCSS("css/index.css");
    }
}

	function loadCSS(filename){ 

	   var file = document.createElement("link");
	   file.setAttribute("rel", "stylesheet");
	   file.setAttribute("type", "text/css");
	   file.setAttribute("href", filename);
	   document.head.appendChild(file);

	}

// Call checkWindowSize() when the window is resized
window.onresize = checkWindowSize;

// Call checkWindowSize() when the page loads
window.onload = checkWindowSize;
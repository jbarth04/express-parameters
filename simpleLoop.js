// a simple javascript program that connects to a server
// run server.js in the terminal by running
// $ node server.js
// then in a new tab on your terminal, cd to your folder "express-parameters"
// and run the command:
// $ python -m SimpleHTTPServer 
// Now on localHost:8000 (running index.html which calls functions in simpleLoop.js)
// you hit server.js running on localHost:5000 (DIFFERENT PORT NUMBERS)


function simpleLoop() {

    // Step 1: create an instance of XMLHttpRequest
    request = new XMLHttpRequest();

    // Step 2: Make request to remote resource
    request.open("get", "http://localhost:5000/simpleLoop", true);

    // Step 3: Create handler function to do something with data in response
    request.onreadystatechange = function () { //closure for getSchedule function

        if (request.readyState == 4 && request.status == 200) {
        
            theData = request.responseText;
            
            names = JSON.parse(theData);

            console.log(names);

            for (var i = 0; i < names.length; i++) {
                console.log(names[i]['firstName']);
            }

            postData(names);
        }

    }

    // Step 4: Send the request
    request.send();
}

function postData(names) {

    var http = new XMLHttpRequest();

    var url = "http://localhost:5000/";

    // I already know names[0]['firstName'] = 'josie'
    // and names[0]['lastName'] = 'barth'
    var params = "firstName=" + names[0]['firstName'];
    params += "&lastName=" + names[0]['lastName'];

    // See console.log for http://localhost:8000/
    // note - PORT 8000
    console.log(params);

    http.open("POST", url, true);

    // Send the proper header information along with the request
    // Josie's note - you'll want to modify this
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);

}
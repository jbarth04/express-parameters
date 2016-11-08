// a simple javascript program that connects to a server
// run server.js in the terminal by running
// $ node server.js
// then in a new tab on your terminal, cd to your folder "express-parameters"
// and run the command:
// $ python -m SimpleHTTPServer 
// Now on localHost:8000 (running index.html which calls functions in simpleLoop.js)
// you hit server.js running on localHost:8080 (DIFFERENT PORT NUMBERS)


function simpleLoop() {

    // Step 1: create an instance of XMLHttpRequest
    request = new XMLHttpRequest();

    // Step 2: Make request to remote resource
    // NOTE: https://messagehub.herokuapp.com has cross-origin resource sharing enabled
    // which is why why using this site doesn't break the same origin policy
    request.open("get", "http://localhost:8080/simpleLoop", true);

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

    var url = "http://localhost:8080/";
    var params = "lorem=ipsum&name=binny";

    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);

}
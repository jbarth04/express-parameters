express-parameters
==================

Code for the tutorial by @sevilayha: Use ExpressJS to Get URL and POST Parameters

==================
# Updated By: Josie Barth
# Date : November 7th 2016

I wrote a little program that helped me clarify the difference
between a server and client-side JavaScript 

simpleLoop.js contains JavaScript functions that connects to a server on localHost:8080

the code for the server is contained in the file server.js

you can run the server by typing the following in your terminal
$ node server.js

then in a new tab on your terminal, cd to your folder "express-parameters"

then run the command:
$ python -m SimpleHTTPServer 

by default, the python server is running on port 8000

Now in your browser, go to localHost:8000, which will load index.html,
and index.html calls functions in simpleLoop.js

simpleLoop.js makes GET and POST requests to the server in server.js

KEY INSIGHT - DIFFERENT PORT NUMBERS

simpleLoop.js is running on localHost:8000
server.js running on localHost:5000 

Thus through this simple program we can see the separation between client and server

Hope this helps!
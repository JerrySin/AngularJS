Before you start the web server, you may need to checkout the dependency libraries with packages.json

1. Working with package.json:

https://docs.npmjs.com/getting-started/using-a-package.json

2. By default, this command will install all modules listed as dependencies in package.json. https://docs.npmjs.com/cli/install

npm install


To host the BookLogger web application you will need to install node.js from the following site:

http://nodejs.org/

Once you have installed node, you may start the web server for the application in a terminal by going to the "BookLogger" directory and typing the following:

node server.js

You may run the web server on a specified port using the following command respectively:

set PORT=7777; node server.js
export PORT=7777; node server.js

That will start the webserver running on port 3000. You may then browse to the application using the following URL:

http://localhost:3000/
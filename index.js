// Loading of the express module
var express = require('express');
var http = require('http');

// Create a service (the app object is just a callback).
var app = express();

app.use(express.static('.'));  // <-- TODO change to set the app directory

// Create an HTTP service.
http.createServer(app).listen(8080);

console.log("C'est parti. En attente de connexion en HTTP (port 8080)...");


/*
Attention au proxy dans les salles de TP pour lancer node et npm.

Pour fixer le proxy, si ce n'est pas déjà fait :
npm config set proxy http://proxy-www.univ-fcomte.fr:3128
npm config set https-proxy http://proxy-www.univ-fcomte.fr:3128

Pour créer un projet Node.js à partir du fichier index.js :
npm init (vous pouvez les laisser les valeurs par défaut à chaque étape)

Pour installer le package express à votre projet :
npm install express --save

Lancer le serveur avec la commande
node . ou node index.js

L'application servie doit se trouver dans le répertoire indiqué (par défault webapp)

Vous pouvez normalement consulter l'application à l'adresse : http://localhost:8080
*/

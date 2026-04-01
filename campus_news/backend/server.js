/*
* JSON-Server without authentication
*/

const jsonServer = require('json-server');
const cors = require('cors');

const app = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// config middleware
app.use(cors()); 
app.use(jsonServer.defaults());
app.use(jsonServer.bodyParser);

// Router (db-endpoints)
app.use(router);

// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`✅ JSON server running without auth under http://localhost:${PORT}`);
});
import Server from './serveur';
import database from './Models/Database';
var config = require('../setting/config');

database();
const server = new Server(config.port);
server.start();

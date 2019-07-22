"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serveur_1 = __importDefault(require("./serveur"));
const Database_1 = __importDefault(require("./Models/Database"));
var config = require('../setting/config');
Database_1.default();
const server = new serveur_1.default(config.port);
server.start();
//# sourceMappingURL=index.js.map
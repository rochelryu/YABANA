"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/admin/index"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
//pour servir des resolution de chemin  import path from 'path';
class Serveur {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.setting();
        this.middlewar();
        this.route();
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`en cours sur ${this.port}`);
        });
    }
    setting() {
        this.app.use(express_1.default.static(__dirname + '/public'));
        /*
        if directory views from to serve engine templating i should to be used this method.
        exemple:
            this.app.set("views", path.join(__dirname, '/views/'))
            this.app.engine('.twig', twig);
            this.app.set('view engine', '.twig');
         */
    }
    middlewar() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
    }
    route() {
        this.app.use('/adfocus', index_1.default);
    }
}
exports.default = Serveur;
//# sourceMappingURL=serveur.js.map
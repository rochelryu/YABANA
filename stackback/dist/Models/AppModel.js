"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User")); // J'importe mon Model.. Le Model est la classe qui details comment est notre Schema. Un Schema rassemble les caractéristiques d'une Entité
class AppModel {
    constructor() {
    }
    static setUser(name, firstname, email) {
        return new Promise((next) => {
            const user = new User_1.default({ name, firstname, email });
            user.save().then((res) => {
                console.log(res);
                next(res);
            }).catch((err) => { console.log(err); next(err); });
        });
    }
    static getUsers() {
        return new Promise((next) => {
            const user = User_1.default.find();
            user.then((res) => {
                next(res);
            }).catch((err) => { next(err); });
        });
    }
}
exports.default = AppModel;
//# sourceMappingURL=AppModel.js.map
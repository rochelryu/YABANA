"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config = require('../../setting/config');
const crypto_1 = __importDefault(require("crypto"));
const User_1 = require("../Models/User");
class UserQuerie {
    constructor() { }
    signin(ele, etat) {
        ele.pass = crypto_1.default.createHmac("SHA256", ele.password).update("Yabana, An other NaN").digest('hex');
        return new Promise((next) => __awaiter(this, void 0, void 0, function* () {
            yield User_1.User.findOne({ email: ele.email }).then((res) => __awaiter(this, void 0, void 0, function* () {
                if (res === null) {
                    console.log("aucun", res);
                    let user = new User_1.User({ address: ele.addresse, password: ele.pass, name: ele.name, firstname: ele.firstname, numero: ele.numero, email: ele.email, etat: etat, ident: Math.floor(Math.random() * 999999999999999) });
                    user.save().then(ress => {
                        console.log(ress);
                        let myToken = jsonwebtoken_1.default.sign({ iss: 'http://yabana.ci', user: ress }, config.secret);
                        next({ result: myToken, etat: 0 });
                    }).catch(errs => {
                        console.log(errs);
                        next(errs);
                    });
                }
                else {
                    console.log("EmailExiste", res);
                    next({ etat: 2 });
                }
                ;
            })).catch(err => next(err));
        }));
    }
    profil(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((next) => __awaiter(this, void 0, void 0, function* () {
                yield jsonwebtoken_1.default.verify(token, config.secret, (err, decode) => __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        next(err);
                    }
                    else {
                        yield User_1.User.findOne({ ident: decode.user.ident }).then((res) => __awaiter(this, void 0, void 0, function* () {
                            if (res === null) {
                                next(new Error("Aucun User avec Cette Identité"));
                            }
                            else {
                                next(res);
                            }
                            ;
                        })).catch(err => next(err));
                    }
                }));
            }));
        });
    }
    signinOther(ele, etat) {
        const moment = new Date();
        return new Promise((next) => __awaiter(this, void 0, void 0, function* () {
            yield User_1.User.findOneAndUpdate({ ident: ele.ident }, { $set: { "login_date": moment } }).then((res) => __awaiter(this, void 0, void 0, function* () {
                if (res === null) {
                    let user = new User_1.User({ name: ele.name, firstname: ele.firstname, email: ele.email, etat: etat, ident: ele.ident, profil: ele.profil });
                    yield user.save().then(ress => {
                        let myToken = jsonwebtoken_1.default.sign({ iss: 'http://yabana.ci', user: { email: ress.email, ident: ress.ident, profil: ress.profil, name: ress.name, firstname: ress.firstname } }, config.secret);
                        next({ result: myToken, etat: 0 });
                    }).catch(errs => next(errs));
                }
                else {
                    let myToken = jsonwebtoken_1.default.sign({ iss: 'http://yabana.ci', user: { address: res.address, numero: res.numero, email: res.email, ident: res.ident, profil: res.profil, name: res.name, firstname: res.firstname } }, config.secret);
                    next({ result: myToken, etat: 1 });
                }
                ;
            })).catch(err => next(err));
        }));
    }
    login(ele, pass) {
        const moment = new Date();
        return new Promise((next) => __awaiter(this, void 0, void 0, function* () {
            yield User_1.User.findOneAndUpdate({ email: ele }, { $set: { "login_date": moment } }).then(res => {
                if (res === null) {
                    next({ etat: 3 });
                }
                else {
                    if (res.password === crypto_1.default.createHmac("SHA256", pass).update("Yabana, An other NaN").digest('hex')) {
                        let myToken = jsonwebtoken_1.default.sign({ iss: 'http://yabana.ci', user: { address: res.address, numero: res.numero, email: res.email, ident: res.ident, profil: res.profil, name: res.name, firstname: res.firstname } }, config.secret);
                        next({ result: myToken, etat: 1 });
                    }
                    else {
                        next({ etat: 2 });
                    }
                }
            }).catch(err => next(err));
        }));
    }
}
exports.default = UserQuerie;
//# sourceMappingURL=UserQuerie.js.map
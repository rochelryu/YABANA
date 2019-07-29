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
const express_1 = require("express"); //Pour les Pouvoir creer les Routes, je use Router. Request & Response me permettront de typé les argument qui seront passé en paramttre
const AppModel_1 = __importDefault(require("../../Models/AppModel")); // J'importe mon Model.. Le AppModel est la classe qui contient toutes mes requêtes;
const router = express_1.Router(); // C'est Comme ça réellement on crée un routage proprement en Express. Cela permet d'être mieux organiser et faire plusieur action à la chaîne mais aussi parallelement.
const Ikea_1 = __importDefault(require("../../Crogs/Ikea"));
const UserQuerie_1 = __importDefault(require("../../Crogs/UserQuerie"));
let fakeUser = { email: "core.irie@gmail.com", nummero: 48803377, password: "azerty" };
router.route('/') //ici c'est pour creer une route et dans notre cas ici c'est la point D'entré de Notre App.
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    let home = new Ikea_1.default();
    let data = yield home.home();
    let cuisine = yield home.homeCuisine();
    //let search = await home.ikeaSearch("meuble", 1, 500);
    res.send({ status: 200, all: data, cuisine: cuisine });
}));
router.route('/categorie/:key') //ici c'est pour creer une route et dans notre cas ici c'est la point D'entré de Notre App.
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    let key = parseInt(req.params.key, 10);
    console.log(typeof key, key);
    if (1 <= key && key <= 12) {
        console.log("Mobilier");
        let home = new Ikea_1.default();
        let data = yield home.getProductByCategorie(key);
        res.send({ status: true, all: data.datas, produit: data.data, concerne: data.concerne });
    }
    else if (13 <= key && key <= 19) {
        console.log("cuisine");
        let homes = new Ikea_1.default();
        let datas = yield homes.getProductByCategorieC(key);
        res.send({ status: true, all: datas.datas, produit: datas.data, concerne: datas.concerne });
    }
    else
        res.send({ status: false, all: [], produit: [], concerne: "Tu ne peux pas me pirater" });
}));
router.route('/search')
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let item = req.body.info;
    item.type = parseInt(item.type, 10);
    if (item.type === 1 || item.type === 2) {
        let ikea = new Ikea_1.default();
        let result = yield ikea.ikeaSearch(item.name.toLowerCase(), 1, 500);
        res.send({ status: true, type: "ikea", all: result });
    }
    else if (item.type === 3 || item.type === 4) {
        res.send({ status: true, type: "aliexpress", all: [] });
    }
    else
        res.send({ status: false });
    /*let home = new  Aliexpress();
    let search = await home.searchAlie()*/
    //res.send({status:200, all:search});
}));
router.route('/signinSimple')
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let clients = req.body.users;
    clients.addresse = clients.addresse.toString();
    let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    if (re.test(String(clients.email).toLowerCase()) && clients.password !== "") {
        let client = new UserQuerie_1.default();
        const user = yield client.signin(clients, 1);
        res.send({ statue: true, info: user });
        //console.log(client.name, client.firstname, client.numero, client.email, client.password, client.confirm, client.address)
        //return false;
    }
    else {
        res.send({ statue: false, err: "Mauvaise Saisie" });
    }
}));
router.route('/signinGoogle')
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let clients = req.body.users;
    clients.ident = parseInt(clients.ident, 10);
    let client = new UserQuerie_1.default();
    const user = yield client.signinOther(clients, 2);
    res.send({ statue: true, info: user });
}));
router.route('/details/:handle')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    if (req.params.handle !== null && req.params.handle !== undefined && req.params.handle !== "") {
        const hamble = req.params.handle;
        if (req.query.r === "r") {
            let details = new Ikea_1.default();
            let info = yield details.ikeaDetails(hamble);
            res.send({ statue: true, info: info });
        }
        else if (req.query.r === "b") {
        }
        else {
            res.send({ statue: false, error: "auth" });
        }
    }
    else {
        res.send({ statue: false, error: "auth" });
    }
}));
router.route('/profil')
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        res.send({ statue: false, info: "nil" });
    }
    else {
        let users = new UserQuerie_1.default();
        let profil = yield users.profil(token);
        res.send({ statue: true, info: profil });
    }
}));
router.route('/login')
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    if (req.body.users.email.length > 0 && req.body.users.password.length >= 4) {
        let memb = new UserQuerie_1.default();
        const user = yield memb.login(req.body.users.email, req.body.users.password);
        //const onl = await memb.verifyUser(req.body.users.email,req.body.users.password)
        res.send({ statue: true, info: user });
    }
    else
        res.send({ statue: false, error: "Mauvais couple d'enresgistrement" });
}));
router.route('/create')
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let { name, firstname, email } = req.body; //meilleur manières de recuperer les différent name de notre req.body (Je tiens à dire que maintenant Express fais le req.body sans même la presence de BodyParser. Mais BodyParser reste toujours utiles dans le cas d'un backend pour mobile.
    const user = yield AppModel_1.default.setUser(name, firstname, email);
    /*new User({name, firstname, email}); //permet de preparer la req pour creer une nouvelle ligne.
            await user.save().then((res)=> console.log(res)).catch((err)=> console.log("echec")); //Pour l'enregistrer maintenant.
            res.send(user)*/
    if (user.name !== "MongoError")
        res.send(user);
    res.redirect('/adfocus');
}));
exports.default = router;
//# sourceMappingURL=index.js.map
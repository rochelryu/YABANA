import { Router, Request, Response } from 'express'; //Pour les Pouvoir creer les Routes, je use Router. Request & Response me permettront de typé les argument qui seront passé en paramttre
import AppModel from '../../Models/AppModel'; // J'importe mon Model.. Le AppModel est la classe qui contient toutes mes requêtes;
const router = Router(); // C'est Comme ça réellement on crée un routage proprement en Express. Cela permet d'être mieux organiser et faire plusieur action à la chaîne mais aussi parallelement.
import Ikea from '../../Crogs/Ikea';
import Aliexpress from '../../Crogs/Aliexpress';
import User from '../../Crogs/UserQuerie';
import { getPageContent } from '../../Crogs/Scrap';


let fakeUser = {email:"core.irie@gmail.com", nummero:48803377, password:"azerty"};
router.route('/') //ici c'est pour creer une route et dans notre cas ici c'est la point D'entré de Notre App.
    .get(async (req:Request, res:Response) => {
        let home = new  Ikea();
        let data:any = await home.home();
        let cuisine = await home.homeCuisine();
        //let search = await home.ikeaSearch("meuble", 1, 500);
    res.send({status:200, all:data, cuisine:cuisine});
});
router.route('/categorie/:key') //ici c'est pour creer une route et dans notre cas ici c'est la point D'entré de Notre App.
    .get(async (req:Request, res:Response) => {
        let key:number = parseInt(req.params.key,10)
        console.log(typeof key, key)
        if(1 <= key && key<=12) {
            console.log("Mobilier")
            let home = new Ikea();
            let data: any = await home.getProductByCategorie(key);
            res.send({status: true, all: data.datas, produit: data.data, concerne: data.concerne});
        }
        else if(13<=key && key<=19) {
            console.log("cuisine")
            let homes = new Ikea();
            let datas: any = await homes.getProductByCategorieC(key);
            res.send({status: true, all: datas.datas, produit: datas.data, concerne: datas.concerne});
        }
         else res.send({status:false, all:[], produit:[],concerne:"Tu ne peux pas me pirater"})
    });
router.route('/search')
    .post(async (req:Request, res:Response) => {
        let item = req.body.info;
        item.type = parseInt(item.type,10)
        if(item.type === 1 || item.type ===2){
            let ikea = new Ikea();
            let result = await ikea.ikeaSearch(item.name.toLowerCase(),1,500)
            res.send({status:true, type:"ikea", all:result});
        }
        else if(item.type === 3 || item.type === 4) {
            res.send({status:true, type:"aliexpress", all:[]});
        }
        else res.send({status:false});
        /*let home = new  Aliexpress();
        let search = await home.searchAlie()*/
        //res.send({status:200, all:search});
    })
router.route('/signinSimple')
    .post(async (req:Request, res:Response)=>{
        let clients = req.body.users;
        clients.addresse = clients.addresse.toString();
        let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
        if(re.test(String(clients.email).toLowerCase()) && clients.password !== "")
        {
            let client = new User();
            const user = await client.signin(clients,1);
            res.send({statue:true, info:user})
            //console.log(client.name, client.firstname, client.numero, client.email, client.password, client.confirm, client.address)

            //return false;
        }
        else{
            res.send({statue:false, err:"Mauvaise Saisie"});
        }
    })
router.route('/signinGoogle')
    .post(async (req:Request, res:Response)=>{
        let clients = req.body.users;
        clients.ident = parseInt(clients.ident,10);
        let client = new User();
        const user = await client.signinOther(clients,2);
        res.send({statue:true, info:user})

    })
router.route('/details/:handle')
    .get(async (req:Request, res:Response)=>{
        if(req.params.handle !== null && req.params.handle !== undefined && req.params.handle !== ""){
            const hamble = req.params.handle;
            if(req.query.r === "r"){
                let details = new Ikea();
                let info = await details.ikeaDetails(hamble);
                res.send({statue:true, info: info})
            }
            else if(req.query.r === "b"){

            }
            else{
                res.send({statue:false, error: "auth"})
            }
        }
        else{
            res.send({statue:false, error: "auth"})
        }
    })
router.route('/profil')
    .get(async (req:Request, res:Response)=>{
        const token = req.headers.authorization;
        if(!token){
            res.send({statue:false, info:"nil"})
        }
        else{
            let users = new User();
            let profil = await users.profil(token)
            res.send({statue:true,info:profil})
        }
    })
router.route('/login')
    .post( async (req:Request, res:Response) => {
    if(req.body.users.email.length >0 && req.body.users.password.length >= 4){
        let memb = new User();
        const user = await memb.login(req.body.users.email,req.body.users.password)
        //const onl = await memb.verifyUser(req.body.users.email,req.body.users.password)
        res.send({statue:true, info:user})
    }
    else res.send({statue:false, error:"Mauvais couple d'enresgistrement"})
});
router.route('/create')
    .post(async (req:Request, res:Response) => {
        let {name, firstname, email} = req.body; //meilleur manières de recuperer les différent name de notre req.body (Je tiens à dire que maintenant Express fais le req.body sans même la presence de BodyParser. Mais BodyParser reste toujours utiles dans le cas d'un backend pour mobile.
        const user = await AppModel.setUser(name,firstname,email);
/*new User({name, firstname, email}); //permet de preparer la req pour creer une nouvelle ligne.
        await user.save().then((res)=> console.log(res)).catch((err)=> console.log("echec")); //Pour l'enregistrer maintenant.
        res.send(user)*/
        if(user.name !== "MongoError") res.send(user)
        res.redirect('/adfocus')
    });


export default router;

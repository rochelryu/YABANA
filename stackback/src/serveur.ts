import express from 'express';
import morgan from 'morgan';
import AdminRoutes from './routes/admin/index';
import bodyParser from 'body-parser';
import cors from 'cors';
//pour servir des resolution de chemin  import path from 'path';
export default class Serveur {
    readonly port:number;
    app: express.Application;
    constructor(port: number){
        this.port = port;
        this.app = express();
        this.setting();
        this.middlewar();
        this.route();

    }
    start(){

        this.app.listen(this.port, ()=>{
            console.log(`en cours sur ${this.port}`);
        })
    }
    setting(){

        this.app.use(express.static(__dirname+'/public'));
        /*
        if directory views from to serve engine templating i should to be used this method.
        exemple:
            this.app.set("views", path.join(__dirname, '/views/'))
            this.app.engine('.twig', twig);
            this.app.set('view engine', '.twig');
         */

    }
    middlewar(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(morgan("dev"));
        this.app.use(cors())
    }
    route(){
        this.app.use('/adfocus', AdminRoutes);
    }
}

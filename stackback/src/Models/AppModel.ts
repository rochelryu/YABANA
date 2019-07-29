import User from './User' // J'importe mon Model.. Le Model est la classe qui details comment est notre Schema. Un Schema rassemble les caractéristiques d'une Entité

export default class AppModel {
    constructor(){

    }
    static setUser(name: string, firstname: string, email: string):Promise<any> {
        return new Promise<any>((next)=>{
            const user = new User({name, firstname, email});
            user.save().then((res: Object)=>{
                console.log(res);
                next(res);
            }).catch((err: Error)=>{console.log(err); next(err)})

        })
    }
    static getUsers():Promise<any> {
        return new Promise<any>((next)=>{
            const user = User.find();
            user.then((res: Object)=>{
                next(res);
            }).catch((err: Error)=>{next(err)})

        })
    }
}

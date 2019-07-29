import {rejects} from "assert";

import {url} from "inspector";
import {response} from "express";
import any = jasmine.any;
import jwt from 'jsonwebtoken';
const config = require('../../setting/config')
import crypto from 'crypto'
import {User} from "../Models/User";
import {Produit} from "../Models/Produit";
import {identifier} from "@babel/types";
export default class UserQuerie {

    constructor(){}

    public signin(ele:any, etat:number){
        ele.pass = crypto.createHmac("SHA256", ele.password).update("Yabana, An other NaN").digest('hex');
        return new Promise(async next=>{
            await User.findOne({email:ele.email}).then( async res=>{
                if(res === null){
                    console.log("aucun", res)
                    let user = new User({address:ele.addresse,password:ele.pass,name:ele.name,firstname:ele.firstname, numero:ele.numero, email:ele.email,etat:etat, ident:Math.floor(Math.random()*999999999999999)});
                    user.save().then(ress=>{
                            console.log(ress)
                        let myToken:string = jwt.sign({iss: 'http://yabana.ci', user:ress}, config.secret)
                        next({result:myToken, etat:0})
                    }).catch(errs=>{

                        console.log(errs)
                        next(errs)})
                }else {
                    console.log("EmailExiste", res)
                    next({etat:2})
                };
            }).catch(err=>next(err))
        })
    }
    public async profil(token:string){
        return new Promise(async next=>{

        await jwt.verify(token,config.secret,async (err:any,decode:any)=>{
            if(err){
                next(err)
            }
            else{
                await User.findOne({ident:decode.user.ident}).then( async res=>{
                    if(res === null){
                        next(new Error("Aucun User avec Cette Identité"))
                    }else {
                        next(res);
                    };
                }).catch(err=>next(err))
            }
        })
    })
    }
    public signinOther(ele:any, etat:number){
        const moment = new Date();
        return new Promise(async next=>{
            await User.findOneAndUpdate({ident:ele.ident}, {$set:{ "login_date": moment }}).then( async res=>{
                if(res === null){
                    let user = new User({name:ele.name,firstname:ele.firstname, email:ele.email,etat:etat, ident:ele.ident, profil:ele.profil});
                    await user.save().then(ress=>{
                        let myToken:string = jwt.sign({iss: 'http://yabana.ci', user:{email:ress.email,ident:ress.ident,profil:ress.profil, name:ress.name, firstname:ress.firstname }}, config.secret)
                        next({result:myToken, etat:0});
                    }).catch(errs=>next(errs))
                }else {
                    let myToken:string = jwt.sign({iss: 'http://yabana.ci', user:{address:res.address,numero:res.numero,email:res.email,ident:res.ident,profil:res.profil, name:res.name, firstname:res.firstname }}, config.secret)
                    next({result:myToken, etat:1});
                };
            }).catch(err=>next(err))
        })
    }


    public login(ele:string, pass:string){
        const moment = new Date();
        return new Promise(async next=>{
            await User.findOneAndUpdate({email:ele}, {$set:{ "login_date": moment }}).then( res=>{
                if(res === null){
                    next({etat:3});
                }else {
                    if(res.password === crypto.createHmac("SHA256", pass).update("Yabana, An other NaN").digest('hex')){
                        let myToken:string = jwt.sign({iss: 'http://yabana.ci', user:{address:res.address,numero:res.numero,email:res.email,ident:res.ident,profil:res.profil, name:res.name, firstname:res.firstname }}, config.secret)
                        next({result:myToken, etat:1});
                    }
                    else {
                        next({etat:2});
                    }
                }
            }).catch(err=>next(err))
        })
    }

}

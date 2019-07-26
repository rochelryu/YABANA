import axios from 'axios';
import decode from 'jwt-decode'
const baseUrl = "http://192.168.50.115:8000/";

export async function all() {
    let ell = [];
    let ellC = [];
    await fetch(baseUrl+'adfocus/').then((res)=>res.json())
        .then((res)=>{
            ell = res.all;
            ellC = res.cuisine;
        })
        .catch((err)=> console.error("erore de ouf" , err))
    return {mobilier:ell, cuisine:ellC}
}
export async function logged() {
    if(localStorage.getItem("authToken")){
        const user = decode(localStorage.getItem("authToken"));
        return {user:user};
    }else{
        return {error:true}
    }
}
export async function logout() {
    localStorage.removeItem("authToken");
}

export async function details(handle) {
    let ele = {};
    await fetch(baseUrl+'adfocus/details/'+handle).then((res)=>res.json())
        .then((res)=>{
            ele = res;
        })
        .catch((err)=> console.error("erore de ouf" , err));
    return ele;
}
export async function sousCategorie(key) {
    let ell = "";
    let ellC = [];
    let selff = [];
    await fetch(baseUrl+'adfocus/categorie/'+key).then((res)=>res.json())
        .then((res)=>{
            selff = res.all;
            ellC = res.produit;
            for (let i in res.all){
                if(res.concerne === res.all[i].ident) ell = res.all[i].name
                continue;
            }
        })
        .catch((err)=> console.error("erore de ouf" , err))
    return {categorie:selff, produit:ellC, current:ell}
}
export async function login(user,pass) {
    const users = {
        email: user,
        password:pass,
    };
    return new Promise( next=>{
        axios.post(`${baseUrl}adfocus/login`, { users })
            .then(res => {
                //console.log(res.data);
                next(res.data);
            }).catch(err=>next(err));

    })

}
export async function signin(name, firstname, email, password, numero, addresse) {
    const users = {
        email: email,
        password:password,
        name:name,
        firstname:firstname,
        numero:numero,
        addresse:addresse,
    };
    return new Promise( next=>{
        axios.post(`${baseUrl}adfocus/signinSimple`, { users })
            .then(res => {
                //console.log(res.data);
                next(res.data);
            }).catch(err=>next(err));
    })
}
export async function signinGoogle(name, firstname, email, profil, ident) {
    const users = {
        email: email,
        name:name,
        firstname:firstname,
        profil:profil,
        ident:ident,
    };
    return new Promise( next=>{
        axios.post(`${baseUrl}adfocus/signinGoogle`, { users })
            .then(res => {
                //console.log(res.data);
                next(res.data);
            }).catch(err=>next(err));
    })
}
export async function profil() {
    let info = {}
    let header_obj = {'Authorization': localStorage.getItem('authToken')}
    await fetch(baseUrl+'adfocus/profil', { headers : header_obj}).then((res)=>res.json())
        .then((res)=>{
            info = res;
        })
        .catch((err)=> console.error("erore de ouf" , err))
    return info;
}

export async function searchItem(name, type) {
    const info = {
        name:name,
        type:type
    }
    return new Promise( next=>{
        axios.post(`${baseUrl}adfocus/search`, { info })
            .then(res => {
                //console.log(res.data);
                next(res.data);
            }).catch(err=>next(err));
    })
}
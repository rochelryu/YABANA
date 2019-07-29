import Items from "../src/items";
import User from "../src/Models/User";
/*
describe pour decrire le test unitaire généralement le même nom que la class sur le fichier cible pour le test.
it(params1,params2) : it est l'exécution
 */
describe('Items', function () {
    it('should return first item', function () {
        expect(Items.getFirstItems()).toBe('Item1') //ça veut dire que la methode de ma classe doit me retourné juste Item1
    });
});

describe('Création de User', function () {
    const alpha =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "k", "r", "s", "t", "u"];
    let name = "";
    for(let i = 0; i < 6; i++){
        name += alpha[Math.floor(Math.random() * alpha.length)];
    }
    const firstname = name + Math.floor(Math.random() * 3);
    const email = firstname + "@gmail.com";
    it('Utilisateur Crée', function () {
        const user = new User({name, firstname, email })
        user.save();
        console.log(user)
        //expect(Items.getFirstItems()).toBe('Item1') //ça veut dire que la methode de ma classe doit me retourné juste Item1
    });
});

/*describe('Liste de User', function () {

    it('Utilisateur Crée', async function () {
        let focus = await User.find();
        console.log(focus)
        //expect(Items.getFirstItems()).toBe('Item1') //ça veut dire que la methode de ma classe doit me retourné juste Item1
    });
});

*/

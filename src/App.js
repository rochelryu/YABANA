import React from 'react';
import HeaderScreen from './Components/Header/HeaderScreen';
import BanerScreen from './Components/Baner/BanerScreen';
let barners = [];
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      actu:[],
      i : 1
    };
  }
  componentDidMount() {
    barners = [
      {
        id: 1,
        bg: "1.jpg",
        title: "Nos attractions L'une de Nos Créa",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, cumque dolor ipsa itaque labore nihil non pariatur quo recusandae! Corporis cumque eaque nesciunt quo, recusandae voluptates. Adipisci maiores odit voluptatum."
      },
      {
        id: 2,
        bg: "1.jpg",
        title: "Felicitez Le ouf de la bagare",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, cumque dolor ipsa itaque labore nihil non pariatur quo recusandae! Corporis cumque eaque nesciunt quo, recusandae voluptates. Adipisci maiores odit voluptatum."
      },
      {
        id: 3,
        bg: "1.jpg",
        title: "AucneIde",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, cumque dolor ipsa itaque labore nihil non pariatur quo recusandae! Corporis cumque eaque nesciunt quo, recusandae voluptates. Adipisci maiores odit voluptatum."
      }
    ];
    console.log(barners)

  }
  componentWillMount() {
    console.log("Eteint");
  }

  tcheck(){
    setTimeout(()=>{
      if(this.state.i < barners.length){
        this.setState({actu: barners[this.state.i]})
      }
      else{
        this.setState({i: 0, actu: barners[this.state.i]})
      }
      this.tcheck()

    }, 3000)
  }

  voir(objet){
    console.log("Voir" + objet);
  }
  AjoutPanier(objet){
    console.log("Ajout" + objet);
  }

  render() {
    return (
        <div className="woocommerce">
          <HeaderScreen />
          <BanerScreen />
        </div>
  );
  }


}

export default App;

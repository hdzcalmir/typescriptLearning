class FoodProduct {

  // properties/fields
  // id=0;
  // name = '';
  // icon = '';

  // constructor (auto implemented properties)
  // a ako zelimo da argumentu koji proslijedimo u constructor
  // se ne moze vise pristupiti stavit cemo da je private
  // dok cemo idalje unutar constructora imati pristup
  constructor(public id: number,public name: string,public icon: string) { }
    // this.id = id;
    // this.name = name;
    // this.icon = icon;

  // }

  // functions

}



let fp = new FoodProduct(25, 'name', 'icon.jpg');
// dodijelili smo vrijednost, tako da bi nam ispisalo
// name u konzoli
console.log(fp.name);



// fp.id = 1;
// fp.name = 'Pizza slice';
// fp.icon = 'icon.jpg';
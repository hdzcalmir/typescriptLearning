import { Product } from "./interfaces";

// kada je klasa abstract od nje ne mozemo kreirati instancu, u biti ova klasa
// je foundational class
// implements Product znaci da klasa prima podatke samo kao sto su u tom interfejsu
abstract class ProductBase implements Product {
  constructor(public id: number,public name: string,public icon: string) { }
  validate() : boolean {
    throw new Error('Not implemented');
  }
}

export class FoodProduct extends ProductBase {

  // properties/fields
  // id=0;
  // name = '';
  // icon = '';

  // constructor (auto implemented properties)
  // a ako zelimo da argumentu koji proslijedimo u constructor
  // se ne moze vise pristupiti stavit cemo da je private
  // dok cemo idalje unutar constructora imati pristup
  // constructor(public id: number,public name: string,public icon: string) { }
    // this.id = id;
    // this.name = name;
    // this.icon = icon;

  // }

  // functions
  validate() : boolean {
    // !! pretvara vrijednost u boolean
    return !!this.id && !!this.name && !!this.icon;
  }
}



// let fp = new FoodProduct(25, 'name', 'icon.jpg');
// dodijelili smo vrijednost, tako da bi nam ispisalo
// name u konzoli
// console.log(fp.name);



// fp.id = 1;
// fp.name = 'Pizza slice';
// fp.icon = 'icon.jpg';

// extends znaci da klasa ima sve funkcionalnosti te klase, to je kao proptotype u obicnoj js
class SportingGoodsProducts extends ProductBase {
  constructor(id: number, name: string, icon: string) {
    super(id, name, icon);
  }
}


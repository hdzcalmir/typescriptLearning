// example of interface
export interface Product {
  id: number;
  name: string;
  icon: string;
  description?: string;
  // izgled funkcije u interfejsu
  // validate(): boolean;
} 

// ovdje smo kreirali novi produkt na osnovu  Product interfejsa, a description je opcionalan
// znaci i moze postojati u produktu a i ne mora
// let productInterface: Product = {
//   id: 12,
//   name: 'Product',
//   icon: 'some.jpg',
// }

// Examples of using a type alias
type ProductAlias =
  | string
  | number
  | {
      id: number;
      name: string;
      icon: string;
      description?: string;
    };

let product: ProductAlias = 'Food';

// Using a type alias versus an enum
enum ProductType {
  Sporting,
  Home,
}

type ProductTypeList = 'SPORTING' | 'HOME';
let p: ProductTypeList = 'SPORTING';

// string, number, boolean, array, undefined, null, any

let firstName: string | null;
firstName = 'Dan';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);

let productType = 'sports'; // homeGoods, grocery ("magic string")
if (productType === 'sports') {
  console.log('Found sports product type.');
}

// Using Enums
// vraca kompleksniji kod ispisan u js
enum ProductType {
  Sports,
  HomeGoods,
  Groceries,
}

// vraca samo redni broj tog elementa
// const enum ProductType {
//   Sports,
//   HomeGoods,
//   Groceries,
// }

let pt = ProductType.Sports;
if (pt === ProductType.Sports) {
  console.log('Found sports product type.');
}

// // string, number, boolean, array, undefined, null, any

// // let firstName = "Almir"; // type inference, kada koristimo u ts bez deklarisanja tipa podataka a dodamo quotes automatski ce to dobiti tip podataka string
// // let firstNameType: string = "Almir"; // dodijeljivanje tipa podatka varijabli

// // ovo znaci da varijabla moze biti null i string
// let firstName: string | null;

// // firstName = 5; // broj ne moze biti dodijeljen string tipu varijable
// // firstName = null;

// firstName = 'Almir';

// let age: number;

// age = 45;

// let hasPurchased = true;

// // string array predstavlja tip arraya/niza sa stringovima, dok any prima sve number, string
// let productNames: string[] = [];

// productNames.push('Basketball');

// let petCount: number[] = [];
// petCount.push(5);


// console.log(firstName, age, hasPurchased, productNames, petCount);

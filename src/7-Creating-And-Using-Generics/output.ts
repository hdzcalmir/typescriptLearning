import { productsURL, FoodProduct, customersURL } from '../lib';

const prefix = '🐉 ';

interface HasId {
  id: number;
}

// CUSTOM CONSTRAINTS
class GenericModel<T extends HasId> {
  public items: T[] | undefined;
  constructor(public url: string) {}

  async getItems(): Promise<T[]> {
    this.items = await getList<T>(this.url);
    return this.items;
  }

  getItemById(id: number): T | undefined {
    return this.items ? this.items.find((p) => (id === p.id)) : undefined;
  }
}

const foodModel = new GenericModel<FoodProduct>(productsURL);

export default async function updateOutput(id: string = 'output') {
  // const products = await getProducts();
  // getList uzima kao tip podatka FoodProduct, te na taj nacin moze uzeti i bilo koji
  // drugi tip podatka
  // const products = await getList<FoodProduct>(productsURL);
  const products = await foodModel.getItems();

  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: FoodProduct[]): string {
  const items = products.map(({ id, name, icon }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

// primjer koristenja genericsa u funkciji
async function getProducts(): Promise<FoodProduct[]> {
  const response: Response = await fetch(productsURL);
  const products: FoodProduct[] = await response.json();
  return products;
}

// T predstavlja type i po konvenciji je da ono bude veliko
// ova funkcija je identicna getProducts samo sto je ona genericna, odnosno moze primati sve
// tipove podataka, reusable je tipa i za korisnike, i za kupce i slicno
async function getList<T>(url: string): Promise<T[]> {
  const response: Response = await fetch(url);
  const items: T[] = await response.json();
  return items;
}

/************************************************
 * Learning sample code.
 ***********************************************/

runTheLearningSamples();

async function runTheLearningSamples() {

  function whatIsIt_number(arg: number) : number {
    return arg;
  }

  console.log(`${prefix} Generics overview`);
  console.log(whatIsIt_number(10));
  
  // function whatIsIt_string(arg: string) : string {
  //   return arg;
  // }

  // console.log(whatIsIt_string('string'));

  // any nije dobra praksa
    function whatIsIt_any(arg: any) : any {
    return arg;
  }

  console.log(whatIsIt_any('almir'));
  console.log(whatIsIt_any(22));
  
  // imamo funkciju koja hendluje vise tipova podataka
  // varijabla type predstavlja tip podatka, a opet je zasticeno
  // jer manuelno unosimo tip podatka prilikom pozivanja funkcije
  function whatIsIt_typed<Type>(arg: Type) : Type {
    return arg;
  }
  
  // ovdje smo rekli da ce tip koji ce biti proslijeđen biti 
  // number/broj, tako vazi i a druge
  let n : number = whatIsIt_typed<number>(22);
  let s : string = whatIsIt_typed<string>('string');
  let b : boolean = whatIsIt_typed<boolean>(true);

  console.log(n,s,b);
  
  // interface za Customera
  interface Customer {
    id: number;
    name: string;
  }

  async function getData() {
    console.log(`${prefix} Generic Functions`);
    // getList funkciji smo samo proslijedili type a ona nam je vratila podatke u oba slucaja
    // i kod customera i kod products
    const products = await getList<FoodProduct>(productsURL);
    console.table(products);
    
    const customers = await getList<Customer>(customersURL);
    console.table(customers);
  }

  await getData();

  interface Model<T> {
    items: T[] | undefined;
    getItems: () => Promise<T[]>;
    getItemsById: (id: number) => T | undefined;
  }

  class FoodModel implements Model<FoodProduct> {
    public items: FoodProduct[] | undefined;

    async getItems(): Promise<FoodProduct[]> {
      this.items = await getList<FoodProduct>(productsURL);
      return this.items;
    }

    getItemsById(id: number) : FoodProduct | undefined {
      return this.items ? this.items.find(item => id = item.id) : undefined;
    }

  }

    const foodModel: FoodModel = new FoodModel();
    await foodModel.getItems();
    // foodModel.getItemsById(90);
    console.log(`${prefix} Generic Interface`);
    console.table(foodModel.items);

    // proslijedili smo tip podatka i argument klasi GenericModel i na osnovu
    // toga mozemo vratiti podatke
    const genericFoodModel = new GenericModel<FoodProduct>(productsURL);
    const genericCustomerModel = new GenericModel<Customer>(customersURL);
    await genericFoodModel.getItems();
    await genericCustomerModel.getItems();
    console.log(`${prefix} Generic Class`);
    console.table(genericFoodModel.items);
    console.table(genericCustomerModel.items);
    
    
    const model: FoodModel = new FoodModel();
    await model.getItems();
    const foodItem: Readonly<FoodProduct | undefined> = model.getItemsById(10);
    if (foodItem) {
      // ne mozemo uredjivati readonly property-e a u ovom slucaju je to foodItem
    // foodItem.name = 'Some name';
    // foodItem.icon = 'Some icon';
    }

    const pear = {name: 'pear'};
    // const pearFood: FoodProduct = pear;
    // ovo ce raditi iako pear ne sadrzi sve property-e koje zahtjeva, jer smo koristili
    // partial, i to je buil in constraints
    const pearFood: Partial<FoodProduct> = pear;
}

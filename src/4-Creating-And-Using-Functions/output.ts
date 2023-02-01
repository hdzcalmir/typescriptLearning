import { productsURL } from "../lib";

const prefix = '🐉 ';

// custom deklarisani tip, kao sto je number, string, string[]
type productType = {
  id: number;
  name: string;
  icon?: string;
}

export default async function updateOutput(id: string) {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if(output && html) {
    output.innerHTML = html;
  }
}


function layoutProducts(products: productType[]) {
  const items = products.map( (p)  => {
    const productHtml = `
    <span class="card-id">#${p.id}</span>
      <i class="card-icon ${p.icon} fa-lg"></i>
    <span class="card-name">${p.name}</span>
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

// async and await are paired together
// promise type productType
async function getProducts(): Promise<productType[]> {
  const response: Response = await fetch(productsURL);
  const products: productType[] = await response.json();
  return products;
}

// run our samples
runTheLearningSamples();

function runTheLearningSamples() {
  // hoisted
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`)
  }

  displayProductInfo(10, 'Pizza');
  // tip podatka koji saljemo kao argument u funkciju mora se podudarati sa tipom podatka koji funkcija prima
  // odnosno tipom podatka parametra
  // displayProductInfo(10, ['Pizza', 1, 'John'])

  // function declaration su hoisted, sto znaci da su pri kompajlanju prebacene na vrh
  // koda, stranice, sto znaci da neovisno gdje je funkcija top tipa deklarisana moze
  // se pozvati bilo gdje

  // hoisted mean lifted to the top

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(10,15));
  
  // : number na kraju znaci da ce return funkcije biti number / broj
  function addNumbersDeclaration(x: number, y: number) : number{
    const sum: number =  x + y;
    return sum;
  }

  // function expression is not hoisted, is not lifted to the top
  const addNumberExpression = function(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
  console.log(addNumberExpression(100,15));

  const sampleProducts = [
    {
      id: 10,
      name: 'Pizza Slice',
      icon: 'fas fa-pizza-slice',
    },
    {
      id: 20,
      name: 'Ice Cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese',
    },
  ];

  // return ce biti string array
  function getProductName() : string[] {
    return sampleProducts.map((p) => p.name);
  }

  console.log(`${prefix} return array`);
  // vraca nam array proizvoda, odnosno imena, a to je ako ne deklarisemo da 
  // output funkcije drugacijeg tipa podatka
  console.log(getProductName());
  
  // bitno da je da stavimo i undefined
  function getProductById(id: number) : productType | undefined {
    return sampleProducts.find(p => id === p.id)
  }

  console.log(`${prefix} return ProductType`);

  console.log(getProductById(20));

  // return type na ovoj funkciji je void
  function displayProducts(products: productType[]) : void {
    const productName = products.map(p => {
      const name = p.name.toLowerCase();
      return name;
    });

    const message = `Sample products include: ${productName.join(', ')}`;
    console.log(`${prefix} return void`);
    console.log(message);
    
  }

  displayProducts(sampleProducts);

}
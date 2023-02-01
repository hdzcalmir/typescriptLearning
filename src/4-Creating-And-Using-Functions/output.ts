const prefix = '🐉 ';

export default async function updateOutput(id:string) {
  
}

// run our samples
runTheLearningSamples();

function runTheLearningSamples() {
  // hoisted
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`)
  }

  displayProductInfo(10, 'Pizza')
  // tip podatka koji saljemo kao argument u funkciju mora se podudarati sa tipom podatka koji funkcija prima
  // odnosno tipom podatka parametra
  // displayProductInfo(10, ['Pizza', 1, 'John'])

  // function declaration su hoisted, sto znaci da su pri kompajlanju prebacene na vrh
  // koda, stranice, sto znaci da neovisno gdje je funkcija top tipa deklarisana moze
  // se pozvati bilo gdje

  // hoisted mean lifted to the top

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(10,15));
  
  
  function addNumbersDeclaration(x: number, y: number){
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

}
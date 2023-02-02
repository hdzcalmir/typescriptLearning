import { productsURL } from './config';
import { Product } from './interfaces';

// type je slican interface, s tim da type moze osim specificno navedenog objekta
// primati i primitivni tip

// getProducts prima producte oblika Product interfejsa
export async function getProducts(): Promise<Product[]> {
  const response: Response = await fetch(productsURL);
  const products: Product[] = await response.json();
  return products;
}

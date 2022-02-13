import connection from "../data/connection";
import { Products } from "../types";


export const selectProducts = async (): Promise<Products | null> => {

  const result = await connection.raw(`
    SELECT * FROM labecommerce_products;
      `);
  const products = result[0].map(addToProducts)
  return result
};

const addToProducts = (input: any): Products => {
  return {
    id: input.id,
    name: input.name,
    price: input.price,
    img_url: input.img_url
  }
} 
import connection from "../data/connection";

export const addProduct = async (
    id: string,
    name: string,
    price:number,
    image_url: string,
  ): Promise<void> => {
    await connection.raw(`
          INSERT INTO labecommerce_products
            (id, name, price, image_url)
          VALUES (
          "${id}",
          "${name}",
          "${price}",
          "${image_url}"
      );
      `);
  }; 
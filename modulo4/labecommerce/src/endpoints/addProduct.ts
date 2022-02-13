import connection from "../data/connection";

export const addProduct = async (
    id: string,
    name: string,
    price:number,
    img_url: string,
  ): Promise<void> => {
    await connection.raw(`
          INSERT INTO labecommerce_products
            (id, name, price, img_url)
          VALUES (
          "${id}",
          "${name}",
          "${price}",
          "${img_url}"
      );
      `);
  }; 
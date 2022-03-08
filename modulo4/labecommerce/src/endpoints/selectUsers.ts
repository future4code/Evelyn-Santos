import connection from "../data/connection";
import { Users } from "../types";

export const selectUsers = async (): Promise<Users> => {

  const result = await connection.raw(`
    SELECT * FROM labecommerce_users;
      `);
  const users = result[0].map(addToUsers)
  return users
};


const addToUsers = (input: any): Users => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        password: input.password
    }
  } 
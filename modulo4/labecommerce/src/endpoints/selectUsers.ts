import connection from "../data/connection";
import { Users } from "../types";

export const selectUsers = async (): Promise<Users> => {

  const result = await connection.raw(`
    SELECT * FROM labecommerce_users;
      `);
  const users = result[0].map(selectUsers)
  return users
};



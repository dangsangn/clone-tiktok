import { client } from "@/utils/client";
import { singleUserQuery } from "@/utils/queries";

export const getSingleUserApi = async (id: string) => {
  const query = singleUserQuery(id);
  const data = await client.fetch(query);
  return data[0];
};

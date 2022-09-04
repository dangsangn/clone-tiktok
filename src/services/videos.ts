import { client } from "@/utils/client";
import { allPostsQuery } from "@/utils/queries";

export const getVideoApi = async (): Promise<any> => {
  try {
    const query = allPostsQuery();
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.log("~ error", error);
  }
};

export const postVideoApi = async (data: any): Promise<any> => {
  try {
    await client.create(data).then((res) => console.log("res", res));
  } catch (error) {
    console.log("~ error", error);
  }
};
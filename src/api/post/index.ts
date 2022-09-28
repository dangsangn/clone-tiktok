import { client } from "@/utils/client";
import { allPostsQuery, postDetailQuery } from "@/utils/queries";

export const getListPostApi = async (): Promise<any> => {
  try {
    const query = allPostsQuery();
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("~ error", error);
  }
};

export const createPostApi = async (data: any): Promise<any> => {
  try {
    await client.create(data).then((res) => console.log("res", res));
  } catch (error) {
    console.error("~ error", error);
  }
};

export const getPostDetailApi = async (id: string): Promise<any> => {
  const query = postDetailQuery(id);
  const data = await client.fetch(query);
  return data[0];
};

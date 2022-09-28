import { client } from "@/utils/client";

export const createUserService = async (data: any, addUser: any) => {
  await client
    .createIfNotExists(data)
    .then(() => {
      addUser(data);
    })
    .catch(() => {
      console.error("create error");
    });
};

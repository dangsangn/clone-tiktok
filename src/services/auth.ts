import { client } from "@/utils/client";

export const createUserService = async (data: any, addUser: any) => {
  await client
    .createIfNotExists(data)
    .then(() => {
      console.log("create success");
      addUser(data);
    })
    .catch(() => {
      console.log("create error");
    });
};

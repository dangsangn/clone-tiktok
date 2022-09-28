import { createUserService } from "@/api/user/auth";
import { useAuthStore } from "@/store/auth";
import { useCallback } from "react";
const useCreateUser = () => {
  const { addUser } = useAuthStore();
  const createUser = useCallback(
    async (data: any) => {
      if (data.profileObj) {
        const user = {
          _id: data.profileObj.googleId,
          _type: "user",
          userName: data.profileObj.name,
          image: data.profileObj.imageUrl,
        };
        await createUserService(user, addUser);
      }
    },
    [addUser]
  );
  return createUser;
};

export default useCreateUser;

import { client } from "@/utils/client";
import { v4 as uuid } from "uuid";

export type DataRequest = {
  userId: string;
  postId: string;
  like: boolean;
};
export const setLikeApi = async (request: DataRequest) => {
  const { userId, postId, like } = request;
  try {
    const data = like
      ? await client
          .patch(postId)
          .setIfMissing({ likes: [] })
          .insert("after", "likes[-1]", [
            {
              _key: uuid(),
              _ref: userId,
            },
          ])
          .commit()
      : await client
          .patch(postId)
          .unset([`likes[_ref=="${userId}"]`])
          .commit();
    return data;
  } catch (error) {
    console.log("~ error", error);
  }
};

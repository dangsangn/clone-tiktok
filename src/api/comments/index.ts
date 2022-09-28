import { client } from "@/utils/client";
import { v4 as uuid } from "uuid";

export type CommentRequest = {
  comment: string;
  userId: string;
  postId: string;
};
export const createCommentApi = async ({
  comment,
  userId,
  postId,
}: CommentRequest) => {
  const data = await client
    .patch(postId)
    .setIfMissing({ comments: [] })
    .insert("after", "comments[-1]", [
      {
        comment,
        _key: uuid(),
        postedBy: { _type: "postedBy", _ref: userId },
      },
    ])
    .commit();
  return data;
};

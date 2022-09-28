import { CommentRequest, createCommentApi } from "@/api/comments";
import { DataRequest, setLikeApi } from "@/api/likes";
import { getPostDetailApi } from "@/api/post";
import create from "zustand";
import { persist } from "zustand/middleware";

const postDetailStore = (set: any, get: any): any => ({
  caption: "",
  postedBy: { username: "", image: "" },
  likes: [],
  comments: [],
  video: null,
  postId: "",
  isFollowing: false,
  getDetailPost: async (id: string) => {
    const result = await getPostDetailApi(id);
    set({
      ...result,
      postId: result._id,
    });
  },
  setLikeAction: async ({ userId, postId, like }: DataRequest) => {
    const data = await setLikeApi({
      userId,
      postId,
      like,
    });
    set({ likes: data?.likes });
  },
  createComment: async ({ comment, userId, postId }: CommentRequest) => {
    const data = await createCommentApi({ comment, userId, postId });
    set({ comments: data?.comments });
  },
});

export const usePostDetailStore = create(
  persist(postDetailStore, { name: "post-detail" })
);

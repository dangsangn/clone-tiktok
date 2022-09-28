export interface IPostItem {
  caption: string;
  postedBy: IUser;
  likes: { postedBy: IUser }[];
  comments: IComment[];
  video: {
    asset: {
      id: string;
      url: string;
    };
    id: string;
  };
  id: string;
  isFollowing?: boolean;
}

export interface IUser {
  image: string;
  userName: string;
  id: string | number;
}

export interface IComment {
  comment: string;
  postedBy: IUser;
}

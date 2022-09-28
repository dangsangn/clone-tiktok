export interface IPostItem {
  caption: string;
  postedBy: IUser;
<<<<<<< HEAD
  likes: { postedBy: IUser }[];
=======
  likes: number[];
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
  comments: IComment[];
  video: {
    asset: {
      id: string;
      url: string;
    };
    id: string;
  };
  id: string;
<<<<<<< HEAD
  isFollowing?: boolean;
=======
  isFllowing: boolean;
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
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

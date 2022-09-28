export const allPostsQuery = () => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
<<<<<<< HEAD
    caption,
    video{
      asset->{
        _id,
        url
      }
    },
    userId,
    postedBy->{
      _id,
      userName,
      image
    },
=======
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
      postedBy->{
        _id,
        userName,
        image
      },
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
<<<<<<< HEAD
      },
=======
    },
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    }
  }`;

  return query;
};

export const postDetailQuery = (postId: string | string[]) => {
  const query = `*[_type == "post" && _id == '${postId}']{
    _id,
<<<<<<< HEAD
    caption,
    video{
      asset->{
        _id,
        url
      }
    },
    userId,
=======
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    postedBy->{
      _id,
      userName,
      image
    },
<<<<<<< HEAD
    likes,
=======
     likes,
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    comments[]{
      comment,
      _key,
      postedBy->{
        _ref,
      _id,
    },
    }
  }`;
  return query;
};

export const searchPostsQuery = (searchTerm: string | string[]) => {
  const query = `*[_type == "post" && caption match '${searchTerm}*' || topic match '${searchTerm}*'] {
    _id,
<<<<<<< HEAD
    caption,
    video{
      asset->{
        _id,
        url
        }
      },
    userId,
=======
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    postedBy->{
      _id,
      userName,
      image
    },
<<<<<<< HEAD
    likes,
=======
likes,
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
<<<<<<< HEAD
      },
=======
    },
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    }
  }`;
  return query;
};

export const singleUserQuery = (userId: string | string[]) => {
  const query = `*[_type == "user" && _id == '${userId}']`;

  return query;
};

export const allUsersQuery = () => {
  const query = `*[_type == "user"]`;

  return query;
};

export const userCreatedPostsQuery = (userId: string | string[]) => {
  const query = `*[ _type == 'post' && userId == '${userId}'] | order(_createdAt desc){
    _id,
<<<<<<< HEAD
    caption,
    video{
      asset->{
        _id,
        url
      }
    },
    userId,
=======
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    postedBy->{
      _id,
      userName,
      image
    },
<<<<<<< HEAD
    likes,
=======
 likes,

>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
<<<<<<< HEAD
      },
=======
    },
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    }
  }`;

  return query;
};

export const userLikedPostsQuery = (userId: string | string[]) => {
  const query = `*[_type == 'post' && '${userId}' in likes[]._ref ] | order(_createdAt desc) {
    _id,
<<<<<<< HEAD
    caption,
    video{
      asset->{
        _id,
        url
      }
    },
    userId,
=======
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    postedBy->{
      _id,
      userName,
      image
    },
<<<<<<< HEAD
    likes,
=======
 likes,

>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
<<<<<<< HEAD
      },
=======
    },
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    }
  }`;

  return query;
};

export const topicPostsQuery = (topic: string | string[]) => {
  const query = `*[_type == "post" && topic match '${topic}*'] {
    _id,
<<<<<<< HEAD
    caption,
    video{
      asset->{
        _id,
        url
      }
    },
    userId,
=======
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    postedBy->{
      _id,
      userName,
      image
    },
<<<<<<< HEAD
    likes,
=======
 likes,
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
<<<<<<< HEAD
      },
=======
    },
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    }
  }`;

  return query;
};

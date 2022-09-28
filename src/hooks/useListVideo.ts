<<<<<<< HEAD
import { getListPostApi } from "@/api/post";
=======
import { getVideoApi } from "@/services/videos";
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
import { IPostItem } from "@/types";
import { useEffect, useState } from "react";

const useListVideo = () => {
  const [listVideo, setListVideo] = useState<IPostItem[]>([]);

  useEffect(() => {
    const getApi = async () => {
      try {
<<<<<<< HEAD
        const data = await getListPostApi();
=======
        const data = await getVideoApi();
        console.log("~ data", data);
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
        if (data) {
          const convertData = data.map((item: any) => {
            return {
              caption: item?.caption,
              postedBy: {
                image: item?.postedBy?.image,
                userName: item?.postedBy?.userName,
                id: item?.postedBy?._id,
              },
              likes: item?.likes
                ? item?.likes.map((like: any) => like?._ref)
                : [],
              comments: item?.comments
                ? item?.comments.map((c: any) => ({
                    comment: c?.comments?.comment,
                    postedBy: {
                      image: c?.postedBy?.image,
                      userName: c?.postedBy?.userName,
                      id: c?.postedBy?._id,
                    },
                  }))
                : [],
              video: {
                asset: {
                  id: item?.video?.asset?._id,
                  url: item?.video?.asset?.url,
                },
                id: item?.video?._id,
              },
              id: item?._id,
            };
          });
          setListVideo(convertData);
        }
      } catch (error) {
        console.log("~ error", error);
      }
    };
    getApi();
    return () => {
      setListVideo([]);
    };
  }, []);
  return listVideo;
};

export default useListVideo;

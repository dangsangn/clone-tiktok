import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Upload from "@/pages/Upload";
import { HeaderLayout, DefaultLayout } from "@/components/Layout";

//public router
const publicRouters = [
  {
    path: "/",
    page: Home,
    layout: DefaultLayout,
  },
  {
    path: "/following",
    page: Following,
    layout: DefaultLayout,
  },
  {
    path: "/upload",
    page: Upload,
    layout: HeaderLayout,
  },
];

//private route
const privateRouters = [];
export { privateRouters, publicRouters };

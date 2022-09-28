import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Upload from "@/pages/Upload";
import Live from "@/pages/Live";
import { HeaderLayout, DefaultLayout } from "@/components/Layout";
import { ROUTES_NAME } from "./constants";
import Detail from "./pages/Detail";

//public router
const publicRouters = [
  {
    path: ROUTES_NAME.HOME,
    page: Home,
    layout: DefaultLayout,
  },
  {
    path: ROUTES_NAME.FOLLOWING,
    page: Following,
    layout: DefaultLayout,
  },
  {
    path: ROUTES_NAME.LIVE,
    page: Live,
    layout: DefaultLayout,
  },
  {
    path: ROUTES_NAME.DETAIL + "/:id",
    page: Detail,
    layout: null,
  },
];

//private route
const privateRouters: any[] = [
  {
    path: ROUTES_NAME.UPLOAD,
    page: Upload,
    layout: HeaderLayout,
  },
];
export { privateRouters, publicRouters };

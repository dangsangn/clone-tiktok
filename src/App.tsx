import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRouters, privateRouters } from "@/Routers";
function App() {
  const showRoutes = (routes: any) => {
    return routes.map((router: any, index: number) => {
      const Page = router.page;
      let Layout = router.layout;
      if (!Layout) Layout = ({ children }: any) => <>{children}</>;
      return (
        <Route
          key={index}
          path={router.path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      );
    });
  };
  return (
    <Routes>
      {showRoutes(publicRouters)}
      {showRoutes(privateRouters)}
    </Routes>
  );
}

export default App;

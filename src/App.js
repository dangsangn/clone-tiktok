import { Routes, Route } from "react-router-dom";
import { publicRouters } from "@/Routers";
function App() {
  return (
      <Routes>
        {publicRouters.map((router, index) => {
          const Page = router.page;
          const Layout = router.layout;
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
        })}
      </Routes>
  );
}

export default App;

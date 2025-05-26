import { Outlet, Route, Routes } from "react-router";
import LoginPage from "./pages/auth/login-page";
import Layout from "./components/layout/layout";
import { lazy } from "react";
import RequireAuth from "./pages/auth/require-auth";

const AdsPage = lazy(() => import("./pages/ads/ads-page"));

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/ads"
        element={
          <RequireAuth>
            <Layout>
              <Outlet />
            </Layout>
          </RequireAuth>
        }
      >
        <Route index element={<AdsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

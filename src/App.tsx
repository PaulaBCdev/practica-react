import { Outlet, Route, Routes } from "react-router";
/* import AdsPage from "./pages/ads/ads-page"; */
import LoginPage from "./pages/auth/login-page";
import AdsPage from "./pages/ads/ads-page";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/ads"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<AdsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

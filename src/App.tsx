import { Navigate, Outlet, Route, Routes } from "react-router";
import LoginPage from "./pages/auth/login-page";
import Layout from "./components/layout/layout";
import RequireAuth from "./pages/auth/require-auth";
import AdvertsPage from "./pages/ads/ads-page";
import { Suspense } from "react";
import LoadingSpinner from "./components/ui/loader";
import AdvertPage from "./pages/ads/ad-page";
import NewAdvertPage from "./pages/ads/new-ad-page";

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/adverts"
          element={
            <RequireAuth>
              <Layout>
                <Outlet />
              </Layout>
            </RequireAuth>
          }
        >
          <Route index element={<AdvertsPage />} />
          <Route path=":id" element={<AdvertPage />} />
          <Route path="new" element={<NewAdvertPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/adverts" />} />
      </Routes>
    </Suspense>
  );
}

export default App;

import { Route, Routes } from "react-router";
/* import AdsPage from "./pages/ads/ads-page"; */
import LoginPage from "./pages/auth/login-page";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;

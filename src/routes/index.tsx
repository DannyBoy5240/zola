import { FC } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from "pages/LandingPage";
import SignUpPage from "pages/SignUpPage";
import PaymentPage from "pages/PaymentPage";
import SetupPage from "pages/SetupPage";
import MainFeedPage from "pages/MainFeedPage";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/mainfeed" element={<MainFeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

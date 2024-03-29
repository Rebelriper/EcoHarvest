import "./styles/index.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Form,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { Navbar, LoginPage, HomePage, Sign_up, Otp } from "./Pages";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/otp" element={<Otp />} />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/" replace />}
        />
      </Routes>

      <ToastContainer position="top-center"></ToastContainer>
    </Router>
  );
}

export default App;

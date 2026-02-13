import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import "./index.css";
import Login from "./components/Login";
import NotFountPage from "./components/NotFountPage";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFountPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

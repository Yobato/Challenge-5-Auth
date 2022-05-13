import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
        <Route element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;

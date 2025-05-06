import LoginPanel from "./components/Login/Login"
import RegistrationPanel from "./components/Register/Register"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegistrationPanel />} />
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
}
export default App;

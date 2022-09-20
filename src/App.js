import { Routes, Route } from "react-router-dom";
import './assets/app.scss';
import Home from './pages/Home';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/profil" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import './assets/app.scss';
import Home from './pages/Home';
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

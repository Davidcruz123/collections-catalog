import './App.css';
import SignIn from './pages/sign-in/sign-in';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<div>test</div>} />
        <Route path="/sign-in" element={<SignIn />} />
    </Routes>
</ Router>

  );
}

export default App;



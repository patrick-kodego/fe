import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NotFound from "./404";
import ContactUs from "./contact-us/index.tsx";
import Dashboard from "./dashboard";
import Login from "./login";
import Register from "./registration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

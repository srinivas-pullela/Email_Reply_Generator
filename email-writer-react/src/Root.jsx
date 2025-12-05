import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage"; // your single-file front page
import App from "./App";            
import Register from "./Register";
import Login from "./Login";
 // target component

export default function Root(){
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<App />} />    {/* note lowercase /app */}
    </Routes>
  );
}

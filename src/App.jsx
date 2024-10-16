// import React from 'react'
import Courses from "./courses/Courses";
import Home from "./home/Home";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import { Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;

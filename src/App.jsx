import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Calculator from "./page/Calculator";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";
import Error from "./page/Error";


export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator/>}/>
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/page2" element={<Page2/>}/>

          {/* default */}
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

// Routing
// hooks 3 useContext()
// try catch
// api handeling
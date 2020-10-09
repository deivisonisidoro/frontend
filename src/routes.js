import React from 'react';
import {  Route, Routes} from 'react-router-dom';
import Main from "./pages/main"
import Detalhes from "./pages/detalhes"

export default function MainRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/detalhes/:id" element={<Detalhes/>}/>
    </Routes>
  )
}


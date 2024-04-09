import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/layout/navbar/Navbar";
import Status from "../pages/CheckInAndOut/Status";
import Contents from "../pages/Post/Contents";
import Registration from "../components/registration/Registration";
import { token } from "../service/user.service";

const index = () => {
  const user = token

  return (
   <BrowserRouter>
     <Navbar />
     <Routes>
      {!user ? (
        <Route path="/registration" Component={Registration} />
      ): (
        <Route path="/registration" element={<Navigate to="/" />} />
      )} 
        <Route path="/" Component={Home}/>
        <Route path="/status" Component={Status}/>
        <Route path="/post" Component={Contents} />
     </Routes>
   </BrowserRouter> 
  )
}

export default index;

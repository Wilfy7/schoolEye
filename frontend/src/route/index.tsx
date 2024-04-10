import React from "react";
import { 
  BrowserRouter,
  Navigate, 
  Route, 
  Routes
 } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/layout/navbar/Navbar";
import Status from "../pages/CheckInAndOut/Status";
import Contents from "../pages/Post/Contents";
import Registration from "../components/registration/Registration";
import { token } from "../service/user.service";
import Login from "../pages/Login/Login";

const index = () => {
  const user = token

  return (
   <BrowserRouter>
   <nav>
     <Navbar />
    </nav>

   <main>
      <Routes>
        {!user ? (
          <Route path="/" element={<Login /> } />
        ) : (
          <Route path="/" element={<Home />} />
        )}


        {!user ? (
        <Route path="/registration" Component={Registration} />
        ): (
        <Route path="/registration" element={<Navigate to="/" />} />
        )} 

        {!user ?(
          <Route path="/login" Component={Login} />
        ):(
          <Route path="login" element={<Navigate to="/" />} />
        )}

        
        <Route path="/status" Component={Status}/>
        <Route path="/post" Component={Contents} />
      </Routes>
    </main>
  </BrowserRouter> 
  )
}

export default index;

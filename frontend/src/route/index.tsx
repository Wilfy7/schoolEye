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
import RegisterChild from "../pages/RegisterChild/RegisterChild";
import Profile from "../pages/Profile/Profile";
import Gallery from "../pages/Gallery/Gallery";
import Children from "../pages/getAllChildren/Children";
import Child from "../pages/singleChild/Child";

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
          <Route path="/login" element={<Navigate to="/" />} />
        )}

        {user ? (
          <Route path="/profile" Component={Profile} />
        ):(
          <Route path="/profile" element={<Navigate to="/" />} />
        )}

        
        <Route path="/posts/all" element={<Home />}/>
        <Route path="/status" Component={Status}/>
        <Route path="/post" Component={Contents} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/children" Component={Children} />
        <Route path="/child/:id" Component={Child} />


        {!user ? (
        <Route path="/child" Component={Login} />
        ):(
        <Route path="/child" element={<RegisterChild />} />
        )}
        
      </Routes>
    </main>
  </BrowserRouter> 
  )
}

export default index;

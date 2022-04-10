import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./components/Blog";
import Home2 from "./pages/Home2";
import Login2 from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Test4 from "./Test4";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";
import { useEffect } from "react";


const App=(props)=>{
  useEffect(()=>{
    props.getUserAuth();
  },[]);
  return(
      

    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Test1 />} />
      <Route path="/" element={<Test1 />} />
      <Route path="login" element={<Test2 />} />
      <Route path="/signup" element={<Test3 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/coup-de-coeur" element={<UserList/>} />
      <Route path="home/blog" element={<Blog/>} />
      <Route path="home/coup-de-coeur/blog" element={<Blog/>} />
      <Route path="home/blog/coup-de-coeur" element={<UserList/>} />
      
     
      
      <Route path="/dd" element={<Test4 />} />
      
      </Routes>
      </BrowserRouter>
   

  );
};

const mapStateToProps=(state)=>{
  return{};
};

const mapDispatchToProps =(dispatch)=>({
 getUserAuth:() => dispatch(getUserAuth()),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
// export default App;
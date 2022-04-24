import React from "react";
import Chat from "../components/chat";
import Form from "../components/Form";
import Header from "../components/Header";

const Home=()=>{
  return(
    <div className="home-page">
    <Header/>
    <Form/>
    <Chat/>
    </div>
  );
};
export default Home;
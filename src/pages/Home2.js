import {StyledTitle,StyledSubTitle,Avatar,StyledButton,ButtonGroup} from "./../components/Styles";
import logo from "./../assets/logo.png";
import styled from "styled-components";
import {connect} from "react-redux";
import {signInAPI} from "../actions";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


const Home2=(props)=>{
  return(
   <div>
     <div style={{
       position: "absolute",
       top:0,
       left:0,
       backgroundColor:"transparent",
       width: "100%",
       padding: "15px",
       display: "flex",
       justifyContent:"flex-start",
     }}>
       <Avatar image={logo}/>
     </div>
     <StyledTitle size={65}>
     Bienvenue à Filmek
     </StyledTitle>
     <StyledSubTitle size={27}>
     Découvrir Notre Catalogue Des Films
     </StyledSubTitle>
     <ButtonGroup>
     <StyledButton to="/login">Se connecter</StyledButton>
     <StyledButton to="/signup">S'inscrire</StyledButton>
     </ButtonGroup>
     <Form>
     <Google onClick={()=>props.signIn()}>
           <img src="/img/google.svg" alt="" />
                Se connecter avec Google
                </Google>
     </Form>
     
   </div>
  );
  }
  const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
const mapStateToProps=(state) =>{
  return{
    user:state.userState.user,
  };
};

const mapDispatchToProps=(dispatch)=>({
  signIn:()=>dispatch(signInAPI()),
});

export default connect(mapStateToProps , mapDispatchToProps)(Home2);
// export default Home2;
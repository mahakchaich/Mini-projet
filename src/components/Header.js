import React from "react";
import { NavLink } from "react-router-dom";
import {signOutAPI} from "../actions";
import { connect } from "react-redux";

const Header=(props)=>{
  return(
    <div className="header">
        <nav>
            <ul>
                <NavLink to="/" className={(nav) => nav.isActive ?  "nav-active" : ""}><li>Acceuil</li></NavLink>
                <NavLink to="coup-de-coeur" className={(nav) => nav.isActive ?  "nav-active" : ""}><li>Coup De Coeur</li></NavLink>
                <NavLink to="blog" className={(nav) => nav.isActive ?  "nav-active" : ""}><li>Blog</li></NavLink>
                <NavLink to="blog" className={(nav) => nav.isActive ?  "nav-active" : ""} onClick={() =>props.signOut()}><li>Se Déconnecter</li></NavLink>
            </ul>
        </nav>
        <h1>Ma Cinema</h1>
    </div>
  );
};
const mapStateToProps = (state) =>{
  return{
    user:state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) =>({
     signOut:() => dispatch(signOutAPI()),
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);

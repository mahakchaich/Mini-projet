import React from "react";
import { NavLink } from "react-router-dom";

const Header=()=>{
  return(
    <div className="header">
        <nav>
            <ul>
                <NavLink to="/" className={(nav) => nav.isActive ?  "nav-active" : ""}><li>Acceuil</li></NavLink>
                <NavLink to="coup-de-coeur" className={(nav) => nav.isActive ?  "nav-active" : ""}><li>Coup de coeur</li></NavLink>
                <NavLink to="blog" className={(nav) => nav.isActive ?  "nav-active" : ""}><li>Blog</li></NavLink>
            </ul>
        </nav>
        <h1>Ma Cinema</h1>
    </div>
  );
};
export default Header;
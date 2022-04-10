import { useField } from "formik";
import { StyledTextInput,ErrorMsg,StyledLebel,StyledIcon } from "./../components/Styles";
import {FiEyeOff,FiEye} from "react-icons/fi";
import { useState } from "react";
export const TextInput =({icon,...props})=>{
    const [filed,meta]=useField(props);
    const [show,setShow]=useState(false);
    return(
        <div style={{position:"relative"}}>
           <StyledLebel htmlFor={props.name}> {props.label} </StyledLebel>
            {props.type !== "password" && <StyledTextInput invalid={meta.touched && meta.error} {...filed} {...props}  />}
            {props.type === "password" && (
            <StyledTextInput invalid={meta.touched && meta.error} {...filed}{...props} type={show ? "text" : "password"} /> )}
            <StyledIcon>{icon}</StyledIcon>
            {
                props.type ==="password" &&(
                <StyledIcon onClick={()=>setShow(!show)} right>
                    {show &&<FiEye/>}
                    {!show && <FiEyeOff/>}
                </StyledIcon>
                 ) }
                 {meta.touched && meta.error ? (
                     <ErrorMsg>{meta.error}</ErrorMsg>
                 ) :(
                    <ErrorMsg style={{visibility:"hidden"}}>.</ErrorMsg>
                 ) }
        </div>
    );
}
    
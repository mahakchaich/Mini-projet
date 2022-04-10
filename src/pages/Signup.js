import {ButtonGroup,StyledTitle,colors,Avatar,StyledFormArea,StyledFormButton,ExtraText,TextLink} from "./../components/Styles";
import logo from "./../assets/logo.png";
import { Formik,Form } from "formik";
import {TextInput} from "./../components/FormLib";
//icons
import {FiMail,FiLock,FiUser} from "react-icons/fi";
import * as Yup from "yup";






const Signup=(signupUser)=>{
    
    return(
        <div>
            <StyledFormArea>
                <Avatar image={logo}/>
                <StyledTitle color={colors.theme} size={30}>Inscription membre </StyledTitle>
                <Formik initialValues={{
                    email:"",
                    password:"",
                    repeatPassword:"",
                    dateOfBirth:"",
                    name:"",
                }}
                validationSchema={
                    Yup.object({
                        email:Yup.string().email("adresse email invalide")
                        .required("Required"),
                        password: Yup.string()
                        .min(8,"mot de passe trop court")
                        .max(30,"mot de passe trop long")
                        .required("Required"),
                        name:Yup.string()
                        .required("Required"),
                        dateOfBirth:Yup.date().required("Required"),
                        repeatPassword:Yup.string().required("Required").oneOf([Yup.ref("password")],"Confirmer votre mot de passe"),
                    })
                }
                onSubmit={(values,{setSubmitting,setFieldError})=>{
                    // console.log(values);
                    signupUser(values,setFieldError,setSubmitting)
                }}>{(isSubmitting)=>(
                    <Form>
                      <TextInput
                       name="name"
                       type="text"
                       label="Full Name"
                       placeholder="olga Simpson"
                       icon={<FiUser/>}
                      />
                       <TextInput
                       name="email"
                       type="text"
                       label="Email Address"
                       placeholder="olga@example.com"
                       icon={<FiMail/>}
                      />
                       <TextInput
                       name="dateOfBirth"
                       type="date"
                       label="Date Of Birth"
                      />

                      <TextInput 
                       name="password"
                       type="password"
                       label="Password"
                       placeholder="********"
                       icon={<FiLock/>}
                      />
                       <TextInput 
                       name="repeatPassword"
                       type="password"
                       label="Repeat Password"
                       placeholder="********"
                       icon={<FiLock/>}
                      />
                      <ButtonGroup>
                        <StyledFormButton type="submit">
                            S'inscrire
                        </StyledFormButton>
                       
                      </ButtonGroup>
                    </Form>
                )}</Formik>
                <ExtraText>
                Vous avez déjà un compte ? <TextLink to="/login">Se connecter</TextLink> 
                </ExtraText>
            </StyledFormArea>
            
        </div>
    )
}
export default Signup;
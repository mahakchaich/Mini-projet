import {ButtonGroup,StyledTitle,colors,Avatar,StyledFormArea,StyledFormButton,ExtraText,TextLink} from "./../components/Styles";
import logo from "./../assets/logo.png";
import { Formik,Form } from "formik";
import {TextInput} from "./../components/FormLib";
//icons
import {FiMail,FiLock} from "react-icons/fi";
import * as Yup from "yup";
import {connect} from "react-redux";








const Login =({loginUser})=>{
    // const history=useHistory();
    
    return(
        
        <div>
            <StyledFormArea>
                <Avatar image={logo}/>
                <StyledTitle color={colors.theme} size={30}>connexion d'un membre </StyledTitle>
                <Formik initialValues={{
                    email:"",
                    password:"",
                }}
                validationSchema={
                    Yup.object({
                        email:Yup.string().email("adresse email invalide")
                        .required("Required"),
                        password: Yup.string()
                        .min(8,"mot de passe trop court")
                        .max(30,"mot de passe trop long")
                        .required("Required"),
                    })
                }
                onSubmit={(values,{setSubmitting,setFieldError})=>{
                    console.log(values);
                    window.location.replace("http://localhost:3000/home");
                    loginUser(values,setFieldError,setSubmitting);
                   
                   
                }}>{(isSubmitting)=>(
                    <Form>
                      <TextInput
                       name="email"
                       type="text"
                       label="Email Address"
                       placeholder="olga@example.com"
                       icon={<FiMail/>}
                      />

                      <TextInput 
                       name="password"
                       type="password"
                       label="Password"
                       placeholder="********"
                       icon={<FiLock/>}
                      />
                      <ButtonGroup>
                        <StyledFormButton type="submit" >
                            Se connecter
                        </StyledFormButton>
                        
                      </ButtonGroup>

                    </Form>
                )}</Formik>
                
                <ExtraText>
                nouveau ici? <TextLink to="/signup">S'inscrire</TextLink> 
                </ExtraText>
            </StyledFormArea>
            
        </div>
    )
}


    

export default Login;
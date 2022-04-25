import {auth} from "../firebase";
const socialMediaAuth=(provider) => {
    return auth
    .signInWithPopup(provider)
    .then((res)=>{
        return res.user;
    })
    .catch((er) => {
        return er;
    })
};

export default socialMediaAuth;
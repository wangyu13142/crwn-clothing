import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignInForm from '../sign-up-form/sign-up-form.component';
const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef =await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Let's Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
            <SignInForm></SignInForm>
        </div>
    )
}
export default SignIn;
// 导入并使用全局上下文
import { useState, useContext } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import FormInput from "../../components/form-input/form-input.compnent";
import Button from "../../components/button/button.component";
import './sign-in-form.styles.scss'
const defaultFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFileds, setFormFields] = useState(defaultFields);
    const { email, password } = formFileds;
    // 重置表单
    const restFields = () => {
        setFormFields(defaultFields);
    }
    // 使用谷歌方式登录
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }
    // 使用普通的邮箱密码进行登录
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            // 清空表单
            restFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect Password for Email');
                    break;
                case 'auth/user-not-found':
                    alert('No User Associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }


    }

    // 表单域更方法
    const changeFields = (event) => {
        const { name, value } = event.target;
        // 解构为表单进行重新赋值
        setFormFields({ ...formFileds, [name]: value });
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Email:' type="email" name="email" value={email} onChange={changeFields} />
                <FormInput label='Password:' type="password" name="password" value={password} onChange={changeFields} />

                <div className="button-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} btnType="google" >Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;
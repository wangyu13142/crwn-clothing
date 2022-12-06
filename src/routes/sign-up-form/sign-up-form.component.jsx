import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import FormInput from "../../components/form-input/form-input.compnent";
import Button from "../../components/button/button.component";
import './sign-up-form.styles.scss'
const defaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFileds, setFormFields] = useState(defaultFields);
    const { displayName, email, password, confirmPassword } = formFileds;
    // 重置表单
    const restFields = () => {
        setFormFields(defaultFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            // 清空表单
            restFields();
        } catch (error) {
            // 用户存在的情况下
            if (error.code === 'auth/email-already-in-use') {
                alert('Can not Create user,email already in use');
            } else {
                alert('user creation encountered an error', error);
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
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Display Name:' type="text" name='displayName' value={displayName} onChange={changeFields} />
                <FormInput label='Email:' type="email" name="email" value={email} onChange={changeFields} />
                <FormInput label='Password:' type="password" name="password" value={password} onChange={changeFields} />
                <FormInput label='Confirm Password:' type="password" name="confirmPassword" value={confirmPassword} onChange={changeFields} />
                <Button type="submit" >Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;
import './button.styles.scss'
const BUTTON_TYPE_CLASSES = {
    google:'google-sign-in',
    inverted:'inverted'
}
const Button = ({children,btnType,...otherProps})=>{
    return (
        <button {...otherProps} className={`custom-button ${BUTTON_TYPE_CLASSES[btnType]}`}>{children}</button>
    )
}
export default Button;
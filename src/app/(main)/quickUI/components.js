
import { buttonCode, loginFormCode, registerFormCode } from "./code"
import RegisterForm from "./_components/RegisterForm"
import LoginForm from "./_components/LoginForm"
import ButtonGroup from "./_components/Button"

export const components = {
  login: {
    title: "Login Form",
    component: <LoginForm />,
    code: loginFormCode,
  },

  register: {
    title: "Register Form",
    component:<RegisterForm/>,
    code:registerFormCode,
  },
  button: {
    title: "Button",
    component:<ButtonGroup/>,
    code:buttonCode,
  },
}


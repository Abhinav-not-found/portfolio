
import { loginFormCode, registerFormCode } from "./code"
import RegisterForm from "./_components/RegisterForm"
import LoginForm from "./_components/LoginForm"

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
}


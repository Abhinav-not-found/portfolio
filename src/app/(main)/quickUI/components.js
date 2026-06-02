import LoginForm from "@/components/form/login-form"
import { loginFormCode } from "./code"
// import RegisterForm from "@/components/form/register-form"

export const components = {
  login: {
    title: "Login Form",
    component: <LoginForm />,
    code: loginFormCode,
  },

  register: {
    title: "Register Form",
    component: "<RegisterForm />",
    code: "register form code",
  },
}


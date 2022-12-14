import CustomInput from "../../components/customInput/custom-input"
import "./sign-in.css"
import { AiOutlineMail } from "react-icons/ai"
import { RiLockLine } from "react-icons/ri"
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../store";
import {logInActions} from "../../store/log-in-slice"
import { useState } from "react";


const SignIn = () => {
  const [password, setPassword] = useState<string>("");
  const user = useSelector((state: RootState) => state.logIn.user)
  const dispatch = useDispatch();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(password,user)
    console.log("submit");
  }

    const passWordChangeHandler = (e:any):void =>{
 
      dispatch(logInActions.setUser(e.target.value))
    }

  return (
    <div className="sign-in-container">
      <form className="sign-in" onSubmit={handleSubmit}>
        <span>Login</span>
        <CustomInput label="Email Adress" placeholder="olga1@example.com" value={user} onchangeFunction={passWordChangeHandler} >
          <AiOutlineMail />
        </CustomInput >
        <CustomInput label="Password" placeholder="********" type="password" value={password} onchangeFunction={(e:any)=>setPassword(e.target.value)} >
          <RiLockLine />
        </CustomInput >
        <div className="button-container">
          <button className="login-button" type="submit">Login</button>
          <div className="button-labels">
            <span style={{ color: "black" }} >New here?</span>
            <span>Sign up</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn
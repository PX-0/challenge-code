import { FormEvent, useContext, useState } from "react";
import useInput from "../../hooks/use-input";
import { UserContext } from "../../store/user-context";
import WrapperVh from "../ui/WrapperVh";
import ToastError from "../ui/ToastError";
import MyButton from "../ui/MyButton";
import EyeIcon from "../ui/icons/EyeIcon";
import EyeSlashIcon from "../ui/icons/EyeSlashIcon";

function FormLogin() {
  const ucx = useContext(UserContext);

  const [showPassword,setShowPassword]=useState<boolean>(false);

  function onClickIconHandler(){
    setShowPassword(!showPassword);
  }

  interface Credentials {
    password: string;
    username: string;
  }

  const myCredentials: Credentials = {
    password: "Challenge",
    username: "Dario",
  };

  const [isWrongCredentials, setIsWrongCredentials] = useState<boolean>();

  const {
    enteredValue: enteredUsername,
    onChangeValueHandler: onChangeHandlerUsername,
    hasError: usernameHasError,
    onBlurInputHandler: onBlurUsernameHandler,
  } = useInput((value: string) => value.trim() !== "");

  const {
    enteredValue: enteredPassword,
    onChangeValueHandler: onChangeHandlerPassword,
    hasError: passwordHasError,
    onBlurInputHandler: onBlurPasswordHandler,
  } = useInput((value: string) => value.trim() !== "");

  //methods

  const formValid = !passwordHasError&& !usernameHasError;

  function onSubmitHandler(event: FormEvent) {
    event.preventDefault();
      if(formValid){
        if (
          myCredentials.password === enteredPassword &&
          myCredentials.username === enteredUsername
        ) {
          setIsWrongCredentials(false);
          sessionStorage.setItem("username",enteredUsername);
          ucx.setAuthorized();
        } else {
          setIsWrongCredentials(true);
        }
      }else{
        setIsWrongCredentials(true);
      }
      
    } 

  function onClickHandlerToast() {
    setIsWrongCredentials(!isWrongCredentials);
  }

  const show = showPassword?'text':'password';

  return (
    <WrapperVh className="flex flex-col justify-center items-center bg-blob bg-no-repeat bg-cover bg-center w-full">
      <div className="border-transparent shadow-lg shadow-cyan-500 p-24  rounded-tl-4xl rounded-bl-6xl rounded-br-4xl rounded-tr-6xl px-36">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col justify-center items-center gap-10"
        >
          <div className="pr-6">
            <label
              htmlFor="username"
              className="pl-2 block text-lg text-cyan-600 font-medium"
            >
              {" "}
              Username
            </label>
            <input
              className={"pl-3 py-1 rounded-3xl"}
              type="text"
              id="username"
              onChange={onChangeHandlerUsername}
              onBlur={onBlurUsernameHandler}
              value={enteredUsername}
            />
            {usernameHasError && (
              <p className="text-red-700 font-jp font-semibold text-sm pl-2">
                Please enter your username
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="username"
              className="pl-2 block text-lg  text-cyan-600 font-medium"
            >
              Password
            </label>
            <div className="flex items-center gap-1">
              <input
                className={"pl-3 py-1 rounded-3xl peer"}
                type={show}
                id="password"
                onChange={onChangeHandlerPassword}
                onBlur={onBlurPasswordHandler}
                value={enteredPassword}
              />
              {!showPassword&&(<EyeSlashIcon onClick={onClickIconHandler} className="stroke-white w-5 h-5 cursor-pointer"/>)}
              {showPassword&&(<EyeIcon onClick={onClickIconHandler} className="stroke-white w-5 h-5 cursor-pointer"/>)}
            </div>
            {passwordHasError && (
              <p className="text-red-700 font-jp font-semibold text-sm pl-2">
                Please enter your password
              </p>
            )}
          </div>
          <MyButton
          disabled={false}
            onClick={undefined}
            classname="py-1 px-7 text-white rounded-3xl bg-cyan-600 hover:bg-cyan-900 hover:ease-in duration-200"
          >
            Login
          </MyButton>
        </form>
      </div>
      {isWrongCredentials && (
        <ToastError
          textError="Wrong Password or Username"
          onClick={onClickHandlerToast}
        />
      )}
    </WrapperVh>
  );
}

export default FormLogin;

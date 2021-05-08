import { useContext, useState } from "react";
import { backendConnection } from "../Services/backendConnection";

export default function LogIn() {
  const backend = useContext(backendConnection);
  const loginParams = { username: "", password: "" };
  const [isLoading, setLoading] = useState(false);

  const blurHandler = (fieldName) => (blurEvent) => {
    loginParams[fieldName] = blurEvent.target.value;
  };
  const loginClickHandler = async () => {
    setLoading(true);
    const loginResponse = await backend.AuthConnection.logIn(loginParams);
    if (loginResponse.error) {
      console.error(loginResponse);
      setLoading(false);
    } else {
      //TODO: redirect mealplans, I guess?
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="email@em.ail"
        onBlur={blurHandler("username")}
      />
      <input
        type="password"
        placeholder="hunter2"
        onBlur={blurHandler("passwowrd")}
      />
      <button disabled={isLoading} onClick={loginClickHandler}>
        Log In
      </button>
    </div>
  );
}

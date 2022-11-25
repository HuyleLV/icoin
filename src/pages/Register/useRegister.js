import { useState } from "react";
import { validateEmail } from "./../../utils/rules/commonValidate";
import Axios from "axios";


export default function useRegister() {
  const [error, setError] = useState({});

  const validateForm = (data) => {
    if (data.email === "" || data.password === "") {
      setError("Please enter your email and password");
      return false;
    } else if (!validateEmail(data.email)) {
      setError("Email is invalid!");
      return false;
    }
    setError("");
    return true;
  };

  const doSubmit = async (data) => {

    if (validateForm(data)) {
      const res = await Axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/auth/register`,
        data
      );
      if (res && res.data.success) {
        // const user = {
        //   access_token: res.data.access_token,
        //   refresh_token: res.data.refresh_token,
        //   user_id: res.data.userId
        // };
        // // save to local storage
        // localStorage.setItem("_user", JSON.stringify(user));
        setError(res.data)
      } else {
        setError(res.data)
      }

    }
  };

  return {
    doSubmit,
    error,
  };
}

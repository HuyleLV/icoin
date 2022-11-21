import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addChangeTransfer } from "../../redux/actions/UserActions";

export default function useTranferCoin() {
  const [notifi, setNotifi] = useState("");

  const dispatch = useDispatch();

  const doSubmit = (dataTransfer) => {
    console.log("data", dataTransfer);
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/transfer/postTrainsfer`,
        dataTransfer
      )
      .then((res) => {
        dispatch(addChangeTransfer(true));
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {}, []);

  return {
    notifi,
    doSubmit,
  };
}

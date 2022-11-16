import axios from "axios";

export const getTransferHistory = async (setTransferHistory) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/transfer/getTopWallet"
    );
    if (res) {
      setTransferHistory(res.data.data);
    }
  } catch (error) {
    console.log(error);
  }
  return {
    setTransferHistory,
  };
};

export const getMyTransferHistory = async (setTransferHistory) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/transfer/getHistoryTranfer"
    );
    if (res) {
      setTransferHistory(res.data.data);
    }
  } catch (error) {
    console.log(error);
  }
  return {
    setTransferHistory,
  };
};

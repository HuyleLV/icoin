import axios from "axios";

export const getTransferHistoryNTC = async (setTransferHistoryNTC) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/transfer/getTopWalletNTC"
    );

    if (res) {
      setTransferHistoryNTC(res.data.data);
    }
    
  } catch (error) {
    console.log(error);
  }
};

export const getTransferHistoryNCO = async (setTransferHistoryNCO) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/transfer/getTopWalletNCO"
    );

    if (res) {
      setTransferHistoryNCO(res.data.data);
    }
  } catch (error) {
    console.log(error);
  }
  return {
    setTransferHistoryNCO,
  };
};

export const getTransferHistoryNUSD = async (setTransferHistoryNUSD) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/transfer/getTopWalletNUSD"
    );
    if (res) {
      setTransferHistoryNUSD(res.data.data);
    }
  } catch (error) {
    console.log(error);
  }
  return {
    setTransferHistoryNUSD,
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

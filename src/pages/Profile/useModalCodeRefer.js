import Axios from "axios";


export const sendCodeRefer = async (data) => {
    try {
        const res = await Axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/v1/user/codeReferral`,
            data
        );

        return res.data




    } catch (error) {
        console.log(error)
        return error
    }
};


import Axios from "axios";


export const doSubmitRegisterGoogle = async (data) => {
    try {
        const res = await Axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/v1/auth/register-google`,
            data
        );

        return res.data



    } catch (error) {
        console.log(error)
        return error
    }
};


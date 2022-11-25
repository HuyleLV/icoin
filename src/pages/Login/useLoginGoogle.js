import Axios from "axios";

const loginGoogle = async (data) => {
    try {
        const res = await Axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/v1/auth/login-google`,
            data
        );
        if (res && res.data.success) {
            // const user = {
            //     access_token: res.data.data.access_token,
            //     refresh_token: res.data.data.refresh_token,
            //     user_id: res.data.data.userId
            // };
            // save to local storage
            // localStorage.setItem("_user", JSON.stringify(user));
            // set error cho page

            return res.data;
        } else {

            return res.data;
        }
    } catch (error) {
        console.log(error)
    }
};

export default loginGoogle
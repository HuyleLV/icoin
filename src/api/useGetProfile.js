import Axios from "axios";

export const getProfile = async (setUser, id) => {
    try {
        const res = await Axios.get(
            `http://localhost:5000/api/v1/user/${id}`
        );
        const newArr = [];
        newArr.push(res.data.data)
        if (res) {
            setUser(newArr);
        }
    } catch (error) {
        console.log(error);
    }
};
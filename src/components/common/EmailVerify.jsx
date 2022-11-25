import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";


const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(false);
    const param = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:5000/api/v1/user/${param.id}/verify/${param.code_verify}`;
                const data = await axios.get(url);
                console.log(data);
                if (data.data.success) {
                    setValidUrl(true);
                } else {
                    setValidUrl(false);
                }



                // 
            } catch (error) {
                console.log(error);
                // setValidUrl(false);
            }
        };
        verifyEmailUrl();
    }, [param]);

    return (
        <>
            {validUrl ? (
                <div>
                    <h1>Email verified successfully</h1>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            ) : (
                <PageNotFound />
            )}
        </>
    );
};

export default EmailVerify;
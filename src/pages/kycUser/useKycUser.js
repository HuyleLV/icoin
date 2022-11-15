import axios from "axios";

export const uploadImage = (files, setImage) => {
  const formData = new FormData();
  formData.append("upload_preset", "walletcoin");
  formData.append("file", files);
  formData.append("cloud_name", "dik3ynw8s");
  axios
    .post("https://api.cloudinary.com/v1_1/dik3ynw8s/upload", formData)
    .then((res) => {
      setImage(res.data);
    })
    .catch((e) => console.warn(e));
};


export const _handleVerify = () => {
    
}
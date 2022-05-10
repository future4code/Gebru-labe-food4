import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeed } from "../Routes/coodinator";

const headers = {
    headers: {
        auth: localStorage.getItem("token"),
    },
};

export const RegisterAddress = (body, clean, navigate) => {
    
  axios
    .post(`${BASE_URL}/address`, body, headers)
    .then(() => {
        clean();
        goToFeed(navigate)
    })
    .catch((err) => {
        alert(err.response.data.message);
        clean();
    });
};
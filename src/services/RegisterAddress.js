import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeed } from "../Routes/coodinator";

export const RegisterAddress = (body, headers, clean, navigate) => {
    
  axios
    .post(`${BASE_URL}/address`, body)
    .then((res) => {
        clean();
        goToFeed(navigate)
    })
    .catch((err) => {
        alert(err.response.data.message);
        clean();
    });
};
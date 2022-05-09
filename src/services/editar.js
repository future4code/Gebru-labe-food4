import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";


const headers = {
    headers: {
        auth: localStorage.getItem("token"),
    },
};

export const editar = (body, clean) => {
    axios 
    .put(`${BASE_URL}/profile`, body, headers )
    .then( () => {
        alert("usuário editado com sucesso!")
        clean();
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
  }
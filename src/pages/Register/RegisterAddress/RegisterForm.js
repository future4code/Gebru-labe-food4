import React from "react";
import { useNavigate } from "react-router-dom";

import {TextField,} from "@mui/material";
import Button from "@mui/material/Button";

import { InputContainer } from "./styles";

import useForm from "../../../hooks/useForm";
import { useUnprotectedPage } from "../../../hooks/useUnprotectedPage";

import { RegisterAddress } from "../../../services/RegisterAddress";

const RegisterForm = () => {
  useUnprotectedPage();
  const navigate = useNavigate();

  const { form, onChange, clean } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""});

  const onSubmitForm = (event) => {
    event.preventDefault();
    RegisterAddress(form, clean, navigate);
  };
  console.log(form)

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          type={"Logradouro"}
          name={"street"}
          value={form.street}
          onChange={onChange}
          label={"Logradouro"}
          fullWidth
          margin={"normal"}
          placeholder="Rua / Av."
          required
        />

        <TextField
          type={"text"}
          name={"number"}
          value={form.number}
          onChange={onChange}
          label={"Número"}
          fullWidth
          margin={"normal"}
          placeholder="Número"
          required
        />

        <TextField
          type={"text"}
          name={"complement"}
          value={form.complement}
          onChange={onChange}
          label={"Complemento"}
          fullWidth
          margin={"normal"}
          placeholder="Complemento"
        />

        <TextField
          type={"text"}
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          label={"Bairro"}
          fullWidth
          margin={"normal"}
          placeholder="Bairro"
          required
        />

        <TextField
          type={"text"}
          name={"city"}
          value={form.city}
          onChange={onChange}
          label={"Cidade"}
          fullWidth
          margin={"normal"}
          placeholder="Cidade"
          required
        />

        <TextField
          type={"text"}
          name={"state"}
          value={form.state}
          onChange={onChange}
          label={"Estado"}
          fullWidth
          margin={"normal"}
          placeholder="Estado"
          required
        />

        <br />
        <br />
        <Button
          fullWidth
          variant="contained"
          color={"primary"}
          margin={"normal"}
          type={"submit"}
        >
          Salvar
          
        </Button>
      </form>
    </InputContainer>
  );
};

export default RegisterForm;
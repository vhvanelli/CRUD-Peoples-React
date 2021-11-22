import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom"

import axios from "axios";

import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"
import H1 from "../../Components/Title"
import ContainerItems from "../../Components/ContainerItems"
import Button from "../../Components/Button";

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([])
  const history = useHistory()

  const inputName = useRef()
  const inputAge = useRef()


  const addNewUser = async () => {
    const { data: newUser } = await axios.post("http://localhost:3001/users", { 
      name: inputName.current.value.trim(), 
      age: inputAge.current.value })

      if (inputName.current.value != "" && inputAge.current.value > 0){
        setUsers([...users, newUser])

        history.push("/usuarios")
      }
      else{
        alert("Confira as suas informações de cadastro")
      }
  }
  

  return (
    <Container>
      <Image src={People} alt="peoples" />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input type="number" ref={inputAge} placeholder="Idade" />
        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>
      </ContainerItems>
    </Container>
  );
};

export default App;

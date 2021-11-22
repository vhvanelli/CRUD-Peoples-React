import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"

import axios from "axios";

import Avatar  from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"
import H1 from "../../Components/Title"
import ContainerItems from "../../Components/ContainerItems"
import Button from "../../Components/Button";

import {
  Container,
  Image,
  User,
} from "./styles";

const Users = () => {
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(()=> {
    const fetchUsers = async () => {
      const {data: newUsers} = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }
    fetchUsers()
  },[])

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  const goBackPage = () =>{
    history.push("/")
  }

  return (
    <Container>
      <Image src={Avatar} alt="peoples" />
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>
        <ul>
          {users.map(user => (
            <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>
        <Button onClick={goBackPage} isBack={true} >
          <img alt="seta" src={Arrow}/> Voltar 
          </Button>
      </ContainerItems>
    </Container>
  );
};

export default Users;

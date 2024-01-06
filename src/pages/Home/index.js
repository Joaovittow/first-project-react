import React, { useState, useRef, } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"

import {
  Container,
  Image,
  InputLabel,
  Input,
  Button,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  const addNewUser = async() => {

    const { data: newUser } = await axios.post("http://localhost:3001/users", { 
      name: inputName.current.value, 
      age: inputAge.current.value,
    });
    
    setUsers([...users, newUser]);

    navigate("/users")

  };
  

  return (
    <Container>
      <Image alt="image-people" src={People} />

      <ContainerItens>
        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button onClick={addNewUser}>
          Register <img alt="arrow" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default App;

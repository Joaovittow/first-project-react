import React from "react";
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

const App = () => {
  return (
    <Container>
      <Image />

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Name</InputLabel>
        <Input placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input placeholder="Age" />

        <Button>Register</Button>
      </ContainerItens>
    </Container>
  );
};

export default App;

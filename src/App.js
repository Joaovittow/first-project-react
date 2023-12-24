import React from "react";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"


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
      <Image alt="image-people" src={People}/>

      <ContainerItens>
        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>
        <Input placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input placeholder="Age" />

        <Button>Register <img alt="arrow" src={Arrow} /></Button>
      </ContainerItens>
    </Container>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import { Container, Image, User } from "./styles";
import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    await axios.delete(` http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  const goBackPage = () => {
    navigate("/")
  }

  return (
    <Container>
      <Image alt="image-people" src={Avatar} />

      <ContainerItens isBlur="true">
        <H1>Users</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="arrow" src={Arrow} /> Back
        </Button>
        
      </ContainerItens>
    </Container>
  );
};

export default Users;

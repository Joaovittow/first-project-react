import styled from "styled-components";
import background from "../../assets/background1.svg";

export const Container = styled.div`
  background: url("${background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin: 30px;
`;

export const ContainerItens = styled.div`
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 170px);
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  padding: 15px 20px 15px 25px;
  margin-bottom: 30px;
  margin-top: 30px;

  p {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

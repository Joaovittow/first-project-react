import styled from "styled-components";
import background from "./assets/background.svg";

export const Container = styled.div`
  background: url("${background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  color: #eee;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-left: 25px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  padding: 15px 20px 15px 25px;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 56px;
`;

export const Button = styled.button`
  margin-top: 80px;
  border-radius: 14px;
  background: var(--Templates-5-Color-1, rgba(0, 0, 0, 0.8));
  width: 342px;
  height: 74px;

  color: #fff;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  border: none;
`;

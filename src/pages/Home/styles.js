import styled from "styled-components";
import background from "../../assets/background.svg";

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
  line-height: 28px;
  font-weight: 400;
  margin-bottom: 30px;
`;

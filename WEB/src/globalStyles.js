import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  font-family: "Nunito", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: 3rem;
  background: none;
  white-space: nowrap;
  padding: 10px 40px;
  font-size: 16px;
  color: #528124;
  outline: none;
  border: 2px solid #528124;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:before {
    background: #528124;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: #fff;
  }
`;

export default GlobalStyle;

import styled from "styled-components";
import hero from "../../assets/images/hero.jpg";
import heros from "../../assets/images/heros.jpg";

export const Section = styled.section`
  background: url(${hero}) #528124;
  background-position: center;
  background-size: cover;
  height: 95vh;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  margin-top: -6rem;

  @media screen and (max-width: 480px) {
    background: url(${heros}) #528124;
    background-position: right;
    background-size: cover;
    height: 103vh;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    display: flex;

    :before {
      background: red;
    }
  }
`;

export const Header = styled.div`
  font-size: 4rem;
  line-height: 4rem;
  max-width: 500px;
  font-weight: 200;
  color: #b9060d;
  padding: 1rem 0rem;
  font-family: "Nunito", sans-serif;

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: left;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
  }
`;

export const Headertwo = styled.div`
  font-size: 2rem;
  line-height: 2rem;
  max-width: 450px;
  font-weight: 200;
  color: #000;
  font-family: "Nunito", sans-serif;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
  }
`;

export const Button = styled.div`
  background: #b9060d;
  width: fit-content;
  color: white;
  padding: 1rem 4rem;
  margin-top: 2rem;
  border-radius: 2rem;
  font-weight: 800;
  text-align: center;
  font-family: "Nunito", sans-serif;

  :hover {
    background-color: #528124;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    margin: 0 auto;
    margin-top: 1rem;
    padding: 1rem 2rem;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    background: white;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    background: white;
  }
`;

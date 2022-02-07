import styled from "styled-components";

export const Section = styled.section`
  background: #528124;
  padding: 4rem 10rem;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }

  @media screen and (max-width: 960px) {
    padding: 1rem;
  }
`;
export const Heading = styled.div`
  color: #b9060d;
  font-size: 4rem;
  line-height: 4rem;
  font-weight: 900;
  text-align: center;
  font-family: "Nunito", sans-serif;

  @media screen and (max-width: 480px) {
    color: #b9060d;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 900;
    text-align: center;
    font-family: "Nunito", sans-serif;
  }

  @media screen and (max-width: 960px) {
    color: #b9060d;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 900;
    text-align: center;
    font-family: "Nunito", sans-serif;
  }
`;
export const MainBody = styled.div`
  font-weight: 700;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Nunito", sans-serif;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1.1rem;
    font-family: "Nunito", sans-serif;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1.1rem;
    font-family: "Nunito", sans-serif;
  }
`;
export const InitialBody = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1.5rem;
    margin: 3rem 0rem;
    font-family: "Nunito", sans-serif;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1.5rem;
    margin: 3rem 0rem;
    font-family: "Nunito", sans-serif;
  }
`;

import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  /* background-color: #f9e9ea; */

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Services = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Service = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 0rem;
  img {
    margin-bottom: 1rem;
    border-radius: 2rem;
    border: 0.025rem solid #b9060d;
  }

  h3 {
    font-weight: 800;
    color: #528124;
    font-size: 1.2rem;
    font-family: "Nunito", sans-serif;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 0rem;
  }
`;

export const Header = styled.section`
  padding: 3rem;
  h3 {
    text-align: center;
    font-size: 3rem;
    font-weight: 200;
    color: #528124;
    font-family: "Nunito", sans-serif;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 200;
    max-width: 800px;
    margin: 0 auto;
    font-family: "Nunito", sans-serif;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
    h3 {
      text-align: center;
      font-size: 2rem;
      font-weight: 200;
      color: #528124;
      font-family: "Nunito", sans-serif;
    }
    p {
      text-align: center;
      font-size: 1rem;
      font-weight: 200;
      max-width: 800px;
      margin: 0 auto;
      font-family: "Nunito", sans-serif;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 1rem;

    h3 {
      text-align: center;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: 200;
      color: #528124;
      font-family: "Nunito", sans-serif;
    }
    p {
      text-align: center;
      font-size: 1rem;
      font-weight: 200;
      max-width: 800px;
      margin: 0 auto;
      padding-bottom: 0rem;
      font-family: "Nunito", sans-serif;
    }
  }
`;

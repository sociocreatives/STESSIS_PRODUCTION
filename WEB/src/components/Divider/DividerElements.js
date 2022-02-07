import styled from "styled-components";
import nurse from "../../assets/images/nurse.jpg";

export const Section = styled.section`
  border-bottom: 0.025rem solid #528124;
  /* background: lightgray; */
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

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

export const ContentOne = styled.div`
  background: url(${nurse});
  background-position: center;
  background-size: cover;
  min-height: 30rem;
  padding: 10rem;

  @media screen and (max-width: 480px) {
    min-height: 15rem;
    padding: 3rem;
  }
  @media screen and (max-width: 960px) {
    min-height: 15rem;
    padding: 3rem;
  }
`;

export const ContentTwo = styled.div`
  padding: 4rem 5rem;

  @media screen and (max-width: 960px) {
    padding: 2rem;
  }

  h1 {
    font-weight: 200;
    color: #528124;
    font-size: 3rem;
    line-height: 3rem;
    padding-bottom: 1rem;
    padding-top: 2rem;
    font-family: "Nunito", sans-serif;
  }

  p {
    font-weight: 200;
    padding-bottom: 2rem;
    font-family: "Nunito", sans-serif;
  }
`;

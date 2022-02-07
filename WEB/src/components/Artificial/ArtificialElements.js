import styled from "styled-components";

export const Section = styled.section`
  background: #528124;
  padding: 5rem 15rem;

  h3 {
    text-align: center;
    color: #fff;
    font-weight: 400;
    font-size: 4rem;
    line-height: 3.75rem;
    padding: 2rem;
    font-family: "Nunito", sans-serif;
  }

  p {
    text-align: center;
    font-weight: 100;
    color: white;
    font-size: 1.25rem;
    font-family: "Nunito", sans-serif;
  }

  @media screen and (max-width: 480px) {
    padding: 4rem 2rem;

    h3 {
      text-align: center;
      color: #fff;
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.25rem;
      padding: 1rem 1rem;
      font-family: "Nunito", sans-serif;
    }

    p {
      text-align: center;
      font-weight: 100;
      color: white;
      font-size: 1rem;
      font-family: "Nunito", sans-serif;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 4rem 2rem;

    h3 {
      text-align: center;
      color: #fff;
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.25rem;
      padding: 1rem 1rem;
      font-family: "Nunito", sans-serif;
    }

    p {
      text-align: center;
      font-weight: 100;
      color: white;
      font-size: 1rem;
      font-family: "Nunito", sans-serif;
    }
  }
`;

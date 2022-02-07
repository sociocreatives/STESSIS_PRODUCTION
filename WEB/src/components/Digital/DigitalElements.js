import styled from "styled-components";

export const Section = styled.section`
  border-top: 0.025rem solid green;
  padding: 3rem 0rem;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-family: "Nunito", sans-serif;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: "Nunito", sans-serif;
  }
`;
export const SideOne = styled.div`
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0 auto;
  font-family: "Nunito", sans-serif;
  img {
    margin: 0 auto;
    border-radius: 2rem;
    width: 100%;
    padding: 1rem;

    @media screen and (max-width: 480px) {
      height: 100%;
      margin: 0 auto;
      border-radius: 2rem;
      padding: 0.25rem;
    }
  }
`;
export const SideTwo = styled.div`
  h3 {
    text-align: left;
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 200;
    color: #528124;
    padding-bottom: 2rem;
    font-family: "Nunito", sans-serif;
  }
  p {
    text-align: left;
    font-size: 1.2rem;
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

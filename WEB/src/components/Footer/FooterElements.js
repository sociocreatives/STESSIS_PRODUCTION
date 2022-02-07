import styled from "styled-components";

export const Section = styled.section`
  background: #528124;
  padding: 2rem;
  border-top: #fff solid 0.03rem;
`;
export const Content = styled.section`
  color: white;
  width: 100%;

  input {
    width: 100%;
    margin-bottom: 0.5rem;
    outline: none;
    font-family: "Nunito", sans-serif;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
  }

  select {
    width: 100%;
    margin-bottom: 0.5rem;
    outline: none;
    font-family: "Nunito", sans-serif;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
  }

  option {
    width: 100%;
    margin-bottom: 0.5rem;
    outline: none;
    font-family: "Nunito", sans-serif;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
  }

  textarea {
    width: 100%;
    margin-bottom: 0.5rem;
    outline: none;
    font-family: "Nunito", sans-serif;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 200;
    font-family: "Nunito", sans-serif;
  }

  p {
    font-weight: 200;
    font-family: "Nunito", sans-serif;
  }
`;

export const Button = styled.button`
  border-radius: 3rem;
  background: none;
  white-space: nowrap;
  padding: 10px 40px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 0.03rem solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  font-family: "Nunito", sans-serif;
  width: 100%;

  &:before {
    background: #fff;
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
    color: #b9060d;
    background: #fff;
  }

  @media screen and (max-width: 480px) {
    margin-top: 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  gap: 2rem;
  text-align: center;

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

import styled from "styled-components";

export const Navigation = styled.div`
  position: sticky;
  padding: 1rem 0rem;
`;
export const LogoIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  max-width: 1300px;
  width: 100%;

  @media screen and (max-width: 480px) {
    img {
      width: 160px;
    }
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

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 1.7rem;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.mainColor};
  box-shadow: 0px 2px 3px 0px ${({ theme }) => `${theme.mainColor}cc`};
  padding: 1rem 2rem;
  cursor: pointer;
`;

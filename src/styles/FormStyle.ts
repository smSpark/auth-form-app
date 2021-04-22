import styled from "styled-components";
import { fadeInDown } from "./animtaions";

export const AuthFormWrapper = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
`;

interface AuthInputProps {
  errors: string;
}

export const AuthInput = styled.input<AuthInputProps>`
  width: 100%;
  text-align: center;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid ${({ theme, errors }) => (errors ? theme.rejectColor : theme.secondFontColor)};
  border-radius: 0.4rem;
  padding: 1rem;
  transition: border 0.4s ease, box-shadow 0.4s ease;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme, errors }) => (errors ? theme.rejectColor : theme.mainColor)};
    box-shadow: 0 1px 0 0 ${({ theme, errors }) => (errors ? theme.rejectColor : theme.mainColor)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondFontColor};
  }

`;

export const AuthInputWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const AuthErrorMessage = styled.p`
  position: absolute;
  max-width: 100%;
  padding: 3px;
  top: 90%;
  background-color: rgba(255,255,255, 0.95);
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.rejectColor};
  color: ${({ theme }) => theme.rejectColor};
  font-weight: 700;
  animation: ${fadeInDown} 0.4s ease;
`;

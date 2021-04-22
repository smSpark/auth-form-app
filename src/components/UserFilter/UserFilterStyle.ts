import styled from "styled-components";
import { StyledButton } from "../../styles/ButtonStyle";
import { CommonContainer } from "../../styles/CommonStyles";
import { device } from "../../styles/media";

export const UserFilterWrapper = styled(CommonContainer)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;

export const UserFilterInput = styled.input`
  padding: 1rem;
  flex-grow: 1;
  border: 1px solid ${({ theme }) => theme.fontColor};
  border-radius: 0.4rem;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.mainColor};
    box-shadow: 0 0 2px 0 ${({ theme }) => theme.mainColor};
  }

  @media ${device.mobileM} {
    padding: 0.5rem;
  }
`;

export const UserFilterResetButton = styled(StyledButton)`
  margin-left: 1rem;

  @media ${device.mobileM} {
    padding: 0.5rem;
    font-size: 1.1rem;
  }
`;

import styled from "styled-components";
import { CommonContainer } from "../../styles/CommonStyles";

export const HeaderMenuWrapper = styled(CommonContainer)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: end;
`;

export const UserTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const UserLogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: none;
  margin-left: 0.5rem;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
    transition: fill 0.3s ease;

    :hover {
      fill: ${({ theme }) => theme.mainColor};
    }
  }
`;

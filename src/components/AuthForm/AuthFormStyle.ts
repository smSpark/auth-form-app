import styled from "styled-components";
import { boxShadowStyle } from "../../styles/CommonStyles";
import { device } from "../../styles/media";
import { ReactComponent as UserAvatar } from "../../assets/img/userMale.svg";

export const AuthFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  ${boxShadowStyle};
  padding: 5rem;
  margin: 0 1rem;

  @media ${device.mobileM} {
    flex-grow: 1;
  }
`;

// TODO: Потом поменять, это не заголовок, а ссылка.
export const AuthFormTitle = styled.h4`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.mainColor};
`;

export const UserAvatarImage = styled(UserAvatar)`
  width: 30rem;
  height: 30rem;
`;

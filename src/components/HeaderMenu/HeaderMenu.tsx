import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/auth/selectors";
import { HeaderMenuWrapper, UserLogoutButton, UserMenuWrapper, UserTitle } from "./HeaderMenuStyle";
import { ReactComponent as LogoutImg } from "../../assets/img/logout.svg";
import { logoutRequest } from "../../redux/auth/actions";

const HeaderMenu: React.FC = () => {
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutRequest());
  };

  if (!userData) {
    return null;
  }

  return (
    <HeaderMenuWrapper>
      <UserMenuWrapper>
        <UserTitle>{userData.username}</UserTitle>
        <UserLogoutButton type="button" onClick={logoutHandler}>
          <LogoutImg />
        </UserLogoutButton>
      </UserMenuWrapper>
    </HeaderMenuWrapper>
  );
};

export { HeaderMenu };

import React from "react";
import { UserFilter } from "../../components/UserFilter/UserFilter";
import { UserList } from "../../components/UserList/UserList";
import { UserPageWrapper } from "./UserPageStyle";

const UsersPage: React.FC = () => {
  return (
    <UserPageWrapper>
      <UserFilter />
      <UserList />
    </UserPageWrapper>
  );
};

export { UsersPage };

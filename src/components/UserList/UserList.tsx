import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserListTable,
  UserListTableCell,
  UserListTableRow,
  UserListWrapper,
  UserTableHead,
} from "./UserListStyle";
import { IUsersResponse } from "../../types/api";
import { fetchUsers } from "../../redux/users/actions";
import { getSortedUsers } from "../../redux/users/selectors";
import { UserSortButton } from "../UserSortButton/UserSortButton";
import { PossibleSortTypes } from "../../redux/users/types";
import { getFormatedDate } from "../../assets/js/helpers";

// TODO: Добавить какой-нибудь интерфейс Суперюзеру и активному юзеру
const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(getSortedUsers);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <UserListWrapper title="USER LIST">
      <UserListTable>
        <UserTableHead>
          <tr>
            <UserListTableCell width="7rem" textAlign="center">
              <UserSortButton sortType={PossibleSortTypes.BY_ID}>id</UserSortButton>
            </UserListTableCell>
            <UserListTableCell>user name</UserListTableCell>
            <UserListTableCell>full name</UserListTableCell>
            <UserListTableCell textAlign="right">last online</UserListTableCell>
          </tr>
        </UserTableHead>
        <tbody>
          {usersData.map((user: IUsersResponse) => (
            <UserListTableRow key={user.id} superUser={user.is_superuser}>
              <UserListTableCell textAlign="center">{user.id}</UserListTableCell>
              <UserListTableCell superUser={user.is_superuser}>{user.username}</UserListTableCell>
              <UserListTableCell>{`${user.first_name} ${user.last_name}`}</UserListTableCell>
              <UserListTableCell textAlign="right">
                {getFormatedDate(user.last_login)}
              </UserListTableCell>
            </UserListTableRow>
          ))}
        </tbody>
      </UserListTable>
    </UserListWrapper>
  );
};

export { UserList };

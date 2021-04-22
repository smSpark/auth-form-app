import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortDirection, setSortType } from "../../redux/users/actions";
import { getSortDirection, getSortType } from "../../redux/users/selectors";
import { PossibleSortTypes } from "../../redux/users/types";
import { SortButtonDirection, SortButtonType, SortButtonWrapper } from "./UserSortButtonStyle";

export interface UserSortButtonProps {
  sortType: PossibleSortTypes;
}

const UserSortButton: React.FC<UserSortButtonProps> = ({ children, sortType }) => {
  const dispatch = useDispatch();
  const sortDirection = useSelector(getSortDirection);
  const activeSortType = useSelector(getSortType);

  const changeSortTypeHandler = () => {
    dispatch(setSortType(sortType));
  };

  const changeSortDirectionHandler = () => {
    dispatch(changeSortDirection());
  };

  return (
    <SortButtonWrapper>
      <SortButtonType onClick={changeSortTypeHandler} active={sortType === activeSortType}>
        {children}
      </SortButtonType>
      <SortButtonDirection
        onClick={changeSortDirectionHandler}
        active={sortType === activeSortType}
        tabIndex={sortType === activeSortType ? 0 : -1}
        toLow={sortDirection}
      />
    </SortButtonWrapper>
  );
};

export { UserSortButton };

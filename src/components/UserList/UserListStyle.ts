import styled, { css } from "styled-components";
import { CommonContainer } from "../../styles/CommonStyles";
import { device } from "../../styles/media";

const adminBadge = css`
  :after {
    text-transform: uppercase;
    position: absolute;
    content: "admin";
    font-size: 0.9rem;
    font-weight: 500;
    top: -0.7rem;
    left: 50%;
    background-color: white;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    opacity: 0.9;
    border: 1px solid #ea98989e;
  }
`;

export const UserListWrapper = styled(CommonContainer)`
  width: 100%;
`;

export const UserListTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  font-size: 1.3rem;
`;

export const UserTableHead = styled.thead`
  font-weight: 700;
  text-transform: uppercase;
`;

interface UserListTableRowProps {
  superUser?: boolean;
}

export const UserListTableRow = styled.tr<UserListTableRowProps>`
  position: relative;
  background-color: ${({ superUser }) => (superUser ? "#ea98989e" : "inherit")};

  :nth-child(2n + 1) {
    background-color: ${({ theme, superUser }) => (superUser ? "#ea98989e" : theme.inactiveColor)};
  }
`;

interface UserListTableCellProps {
  textAlign?: "left" | "right" | "center";
  width?: string;
  superUser?: boolean;
}

export const UserListTableCell = styled.td<UserListTableCellProps>`
  position: relative;
  padding: 1rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
  text-align: ${({ textAlign }) => textAlign || "left"};
  border-bottom: 1px solid ${({ theme }) => theme.inactiveColor};
  ${({ width }) => (width ? `width: ${width}` : "")};

  @media ${device.mobileL} {
    padding: 0.5rem;
  }

  ${({ superUser }) => superUser && adminBadge};
`;

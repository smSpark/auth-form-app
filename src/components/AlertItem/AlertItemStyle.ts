import styled from "styled-components";
import { PossibleMessageTypes } from "../../redux/app/types";
import { boxShadowStyle } from "../../styles/CommonStyles";
import rejectImg from "../../assets/img/reject.svg";
import succesImg from "../../assets/img/success.svg";
import warnImg from "../../assets/img/warn.svg";
import { fadeInOutRight } from "../../styles/animtaions";

interface AlertProps {
  type?: PossibleMessageTypes;
  lifetime: number,
}

export const Alert = styled.div<AlertProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  min-height: 3.5rem;
  padding: 0.7rem 1rem 0.7rem ${({ type }) => (type ? "4rem" : "1rem")};
  margin-top: 1rem;
  font-size: 1.5rem;
  text-align: right;
  ${boxShadowStyle}
  animation: ${fadeInOutRight} ${({ lifetime }) => `${lifetime / 1000}s`} ease forwards;

  :before {
    position: absolute;
    content: "";
    left: 0.5rem;
    width: 2.7rem;
    height: 2.7rem;
    background: ${({ type }) => {
    switch (type) {
      case PossibleMessageTypes.ERROR:
        return `url(${rejectImg})`;
      case PossibleMessageTypes.SUCCESS:
        return `url(${succesImg})`;
      case PossibleMessageTypes.WARNING:
        return `url(${warnImg})`;
      default:
        return "";
    }
  }};
  }
`;

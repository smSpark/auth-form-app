import { keyframes } from "styled-components";

export const opacityInAnim = keyframes` 
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeInDown = keyframes`
 from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInOutRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  10% {
    opacity: 1;
    transform: translate3d(0, 0, 0);;
  }

  90% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;

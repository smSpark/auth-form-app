import styled, { css } from "styled-components";
import { device } from "./media";

export const boxShadowStyle = css`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 18px 4px #00000036;
`;

export const commonContainerStyle = css`
  padding: 2rem;
  ${boxShadowStyle};

  @media ${device.tablet} {
    padding: 1.5rem;
  }

  @media ${device.mobileM} {
    padding: 0.5rem;
  }
`;

export const FullwindowContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

interface CommonContaienrProps {
  title?: string;
}

export const CommonContainer = styled.div<CommonContaienrProps>`
  position: relative;
  ${commonContainerStyle};

  ${({ title }) =>
    title
    && `
  :after {
    position: absolute;
    content: "${title}";
    font-size: 1.2rem;
    font-weight: 700;
    background-color: white;
    border-radius: 1rem;
    padding: 0.5rem;
    left: 2rem;
    top: 0;
    transform: translate(0, -50%);
  }`}
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 1rem 3rem;

  @media ${device.laptopL} {
    padding: 1rem;
  }

  @media ${device.mobileM} {
    padding: 1rem 0;
  }
`;

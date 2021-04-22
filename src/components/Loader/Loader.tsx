import React from "react";
import { LoaderWrapper } from "./LoaderStyle";
import { ReactComponent as LoaderImg } from "../../assets/img/loader.svg";

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <LoaderImg />
    </LoaderWrapper>
  );
};

export { Loader };

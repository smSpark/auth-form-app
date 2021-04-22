import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
import { ModalAlert } from "../../components/ModalAlert/ModalAlert";
import { getMessages, getLoadingStatus } from "../../redux/app/selectors";
import { SideWindowsWrapper } from "./SideWindowsStyle";

const SideWindows: React.FC = () => {
  const isLoading = useSelector(getLoadingStatus);
  const isMessages = useSelector(getMessages);
  return (
    <>
      {isLoading && (
        <SideWindowsWrapper>
          <Loader />
        </SideWindowsWrapper>
      )}
      <ModalAlert data={isMessages} />
    </>
  );
};

export { SideWindows };

import React from "react";
import { PossibleMessage } from "../../redux/app/types";
import { AlertItem } from "../AlertItem/AlertItem";
import { ModalAlertWrapper } from "./ModalAlertStyle";

interface ModalAlertProps {
  data: PossibleMessage[];
}

const ModalAlert: React.FC<ModalAlertProps> = ({ data }) => {
  return (
    <ModalAlertWrapper>
      {data.map((alert) => (
        <AlertItem lifetime={alert.lifetime} id={alert.id} type={alert.type} key={alert.id}>
          {alert.content}
        </AlertItem>
      ))}
    </ModalAlertWrapper>
  );
};

export { ModalAlert };

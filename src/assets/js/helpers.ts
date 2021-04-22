import { PossibleMessage, PossibleMessageTypes } from "../../redux/app/types";

export const getFormatedDate = (date: string): string => {
  const dateObj = new Date(date);
  const option: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const dateStr = dateObj.toLocaleDateString("ru-RU", option);
  return `${dateStr}`;
};

export const getErrorMessage = (message: string, lifetime?: number): PossibleMessage => ({
  id: `${Date.now()}`,
  content: message,
  type: PossibleMessageTypes.ERROR,
  lifetime,
});

export const getSucessMessage = (message: string, lifetime?: number): PossibleMessage => ({
  id: `${Date.now()}`,
  content: message,
  type: PossibleMessageTypes.SUCCESS,
  lifetime,
});

export const getWarnMessage = (message: string, lifetime?: number): PossibleMessage => ({
  id: `${Date.now()}`,
  content: message,
  type: PossibleMessageTypes.WARNING,
  lifetime,
});

import { IAuthPost } from "../../types/api";

const MIN_USERNAME_LENGTH = 1;
const MAX_USERNAME_LENGTH = 150;
const USERNAME_REGEXP = /^[\w.@+-]+$/;
const PASSWORD_REGEXP = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
const MAX_PASSWORD_LENGTH = 125;
const MIN_PASSWORD_LENGTH = 8;

export const loginFormValid = ({ username, password }: IAuthPost): IAuthPost => {
  const errors: IAuthPost = {} as IAuthPost;

  if (!USERNAME_REGEXP.test(username)) {
    errors.username = "Допустимые символы: Буква, числа и сиволы [@.+-_]";
  }

  if (!username || username.length < MIN_USERNAME_LENGTH) {
    errors.username = `Минимальная длинна ника ${MIN_USERNAME_LENGTH}`;
  }

  if (username?.length > MAX_USERNAME_LENGTH) {
    errors.username = `Максимальная длинна имени ${MAX_USERNAME_LENGTH}`;
  }

  if (!PASSWORD_REGEXP.test(password)) {
    errors.password = "Пароль должен содержать по крайней мере 1 строчную, 1 заглавную и 1 цифру";
  }

  if (!password || password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Минимальная длинна пароля ${MIN_PASSWORD_LENGTH}`;
  }

  if (password?.length > MAX_PASSWORD_LENGTH) {
    errors.password = `Максимальная длинна пароля ${MAX_PASSWORD_LENGTH}`;
  }

  return errors;
};

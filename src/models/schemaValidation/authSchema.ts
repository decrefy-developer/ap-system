import { object, string } from "yup";

export const loginSchema = object().shape({
  username: string().required(),
  password: string().required(),
});

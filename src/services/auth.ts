import { IForgotPassword, Ilogin, IResetPassword } from "../models/interface";
import axiosInstance from "./axiosInstance";

export const loginUser = async (userCredential: Ilogin) => {
  const response = await axiosInstance.post("/auth/login", userCredential);
  return response.data;
};

export const resetPassword = async (userCredential: IResetPassword) => {
  const { id } = userCredential;
  const response = await axiosInstance.put(`/auth/resetPassword/${id}`, userCredential);
  return response.data;
};

export const forgotPassword = async (userCredential: IForgotPassword) => {
    const { id } = userCredential;
    const response = await axiosInstance.put(`/auth/forgotPassword/${id}`, userCredential);
    return response.data;
}

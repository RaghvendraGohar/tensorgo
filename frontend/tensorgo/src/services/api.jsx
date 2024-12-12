import axios from "axios";
const baseURL = "";
const API = axios.create({ baseURL: "/api" });

export const getCommunicationHistory = async () => {
  const response = await API.get("/emails/history");
  return response.data;
};

export const sendEmail = async (emailData) => {
  const response = await API.post("/emails/send", emailData);
  return response.data;
};

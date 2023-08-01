import axios from "axios";
import { config } from "./axiosconfig";
import { base_url } from "./baseUrl";

export const uploadDoc = async (data) => {
  const formData = new FormData();
  formData.append("images", data);
  const response = await axios.post(`${base_url}upload`, formData, config);
  return response.data[0].url;
};

export const getAllCustomer = async()=>{
  const response = await axios.get(`${base_url}customer`, config);
  return response.data;
}
export const addCustomer = async(data)=>{
  const response = await axios.post(`${base_url}customer/add`,data, config);
  return response.data;
}

import axios from "axios";
import { config } from "./axiosconfig";
import { base_url } from "./baseUrl";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./Firebase";
import { toast } from "react-toastify";

// todo old code ---------------------------
// export const uploadDoc = async (data) => {
//   const formData = new FormData();
//   formData.append("images", data);
//   const response = await axios.post(`${base_url}upload`, formData, config);
//   return response;
// };

export const uploadDoc = (data) => {
  return new Promise((resolve, reject) => {
    const file = data;
    const fileAdress = ref(storage, `finance/${data.name}.pdf`);
    const uploadTask = uploadBytesResumable(fileAdress, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const process = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case "paused":
            toast.error("Uploading is Paused");
            break;
          default:
            break;
        }
        if (process === 100) {
          toast.info(`File uploading is ${process}% done.`);
        }
      },
      (err) => {
        reject(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            // console.log(downloadURL);
            resolve(downloadURL);
          })
          .catch((err) => {
            reject(err);
          });
      }
    );
  });
};


export const getAllCustomer = async () => {
  const response = await axios.get(`${base_url}customer`, config);
  return response.data;
};

export const deleteCustomer = async () => {
  const response = await axios.delete(`${base_url}customer`, config);
  return response.data;
};

export const addCustomer = async (data) => {
  const response = await axios.post(`${base_url}customer/add`, data, config);
  return response.data;
};

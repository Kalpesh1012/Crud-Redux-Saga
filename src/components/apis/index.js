import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const getUserAPI = async () => {
  axios.get("/employees");
};

export const getUserByIdAPI = async (id) => {
  axios.get("/employees/" + { id });
};

export const createUserAPI = async (user) => {
  axios.post("/employees", user);
};

export const deleteUserAPI = async (id) => {
  axios.delete(`/employees/${id}`);
};

export const updateUserAPI = async (user) => {
  axios.put(`/employees/${user.id}`, user);
};

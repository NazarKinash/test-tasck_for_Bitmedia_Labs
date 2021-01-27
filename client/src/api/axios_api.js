import axios from "axios";
axios.defaults.baseURL = `https://fathomless-sierra-45492.herokuapp.com/`;
export async function getUsers(p) {
  const response = await axios.get(`/users?page=${p ? p : 1}&numberOfUsers=15`);
  return response.data;
}

export async function getUserById(id) {
  const response = await axios.get(`/users/user/${id}`);
  return response.data;
}

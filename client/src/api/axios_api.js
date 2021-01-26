import axios from "axios";

export async function getUsers(p) {
  const response = await axios.get(`http://localhost:4848/users?page=${p ? p : 1}&numberOfUsers=15`);
  return response.data;
}

export async function getUserById(id) {
  const response = await axios.get(`http://localhost:4848/users/user/${id}`);
  return response.data;
}

import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3009",
  withCredentials: false,
});

export default {
  getVaccines() {
    return apiClient.get("/vaccines");
  },
};

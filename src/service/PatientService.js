import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3009",
  withCredentials: false,
});

export default {
  getPatientsAll() {
    return apiClient.get("/patients");
  },
  getPatients(page, limit) {
    return apiClient.get("/patients" + "?_page=" + page + "&_limit=" + limit);
  },
  getPatient(id) {
    return apiClient.get("/patients/" + id);
  },
  postSuggestion(id, suggest) {
    return apiClient.put("/patients/" + id, suggest);
  },
};

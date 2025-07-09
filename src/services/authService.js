import axios from "axios";

const API_URL = "/api/v1";

export const authService = {
  // Register user
  register: async (userData) => {
    try {
      // const response = await axios.post(`${API_URL}/register`, userData);
      const response = await axios.post(`/api/v1/register`, userData);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.log("Registration service error:", error.response || error);
      throw error;
    }
  },

  // Login user
  login: async (credentials) => {
    // const response = await axios.post(`${API_URL}/login`, credentials);
    const response = await axios.post(`/api/v1/login`, credentials);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  },

  // Logout user
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  // Get auth token
  getToken: () => {
    return localStorage.getItem("token");
  },
};

export default authService;

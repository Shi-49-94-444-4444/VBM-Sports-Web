// services/authService.ts
import axios from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${process.env.API_BASE_URL}/users/email_login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

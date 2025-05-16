// services/api.ts
import axios from 'axios'

// https://api.github.com/users/Cardosofiles/repos
export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
  timeout: 5000,
})

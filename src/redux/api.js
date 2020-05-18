import axios from "axios";

import {
  API_FULL_PACKAGES_URL,
  API_DELETE_NOTIFICATION_URL,
  API_MARK_NOTIFICATIONS_URL,
  API_SET_LANGUAGE_URL,
  API_RESET_PASSWORD_REQUEST_URL,
  API_RESET_PASSWORD_URL,
  API_CHECK_RESET_TOKEN_URL,
} from "./config";

const api = {
  getFullPackages: () =>
    axios.get(API_FULL_PACKAGES_URL, { handlerEnabled: true }),

  deleteNotification: (id) =>
    axios.delete(API_DELETE_NOTIFICATION_URL + id, {
      handlerEnabled: true,
    }),

  markNotifications: (notification_ids) =>
    axios.put(API_MARK_NOTIFICATIONS_URL, {
      handlerEnabled: true,
      notification_ids,
    }),

  setPreferredLanguage: (lang) =>
    axios.put(API_SET_LANGUAGE_URL + lang, { handlerEnabled: true }),

  passwordResetRequest: async (email) => {
    return await axios.post(API_RESET_PASSWORD_REQUEST_URL, { email });
  },

  resetPassword: async (data) => {
    return await axios.post(API_RESET_PASSWORD_URL, { ...data });
  },

  checkResetToken: async (token) => {
    return await axios.post(API_CHECK_RESET_TOKEN_URL, { token });
  },
};

export default api;

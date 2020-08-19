import axios from "axios";

import {
  API_FULL_PACKAGES_URL,
  API_DELETE_NOTIFICATION_URL,
  API_MARK_NOTIFICATIONS_URL,
  API_SET_LANGUAGE_URL,
  API_RESET_PASSWORD_REQUEST_URL,
  API_RESET_PASSWORD_URL,
  API_CHECK_RESET_TOKEN_URL,
  API_SEND_CONTACT_MAIL_URL,
  API_ACBA_MAKE_ORDER,
  API_CHECK_MAIL_URL,
  API_QUIZ_URL,
  API_CHECK_QUIZ_URL,
  API_RESULTS_QUIZ_URL,
} from "./config";

const api = {
  getFullPackages: () =>
    axios.get(API_FULL_PACKAGES_URL, { handlerEnabled: true }),

  goToACBA: (queryString) => {
    const ACBA_URI = API_ACBA_MAKE_ORDER + queryString;
    return axios.get(ACBA_URI, { handlerEnabled: true });
  },

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

  contactMail: (cantact) => {
    return axios.post(API_SEND_CONTACT_MAIL_URL, { ...cantact });
  },

  checkResetToken: async (token) => {
    return await axios.post(API_CHECK_RESET_TOKEN_URL, { token });
  },

  checkEmail: async (email) => {
    return await axios.post(API_CHECK_MAIL_URL, { email });
  },

  quiz: async (courseId) => {
    return await axios.get(API_QUIZ_URL + courseId, {
      handlerEnabled: true,
    });
  },

  checkQuiz: async (quizId, answers) => {
    return await axios.post(API_CHECK_QUIZ_URL + quizId, {
      handlerEnabled: true,
      answers,
    });
  },

  getResultsForQuiz: async (quizId) => {
    return await axios.get(API_RESULTS_QUIZ_URL + quizId, {
      handlerEnabled: true,
    });
  },
};

export default api;

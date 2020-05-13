import axios from "axios";

import {
  API_FULL_PACKAGES_URL,
  API_DELETE_NOTIFICATION_URL,
  API_MARK_NOTIFICATIONS_URL,
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
};

export default api;

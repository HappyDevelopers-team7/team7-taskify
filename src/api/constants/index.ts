const API = {
  AUTH: {
    LOGIN: 'auth/login',
    PASSWORD: 'auth/password',
  },
  USER: {
    SIGN_UP: 'users',
    MY_INFO: 'users/me',
    UPLOAD_IMAGE: 'users/me/image',
  },
  DASHBOARDS: {
    DASHBOARDS: 'dashboards',
  },
  COLUMNS: {
    COLUMNS: 'columns',
  },
  CARDS: {
    CARDS: 'cards',
  },
} as const;

export default API;

export const AUTH_PAGE_TYPES = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  RECOVERY_PASS: "RECOVERYPASS",
};

export const DEFAULT_LOGIN_FIELDS = [
  {
    placeholder: "Логин*",
    types: [AUTH_PAGE_TYPES.LOGIN, AUTH_PAGE_TYPES.REGISTER],
    required: true,
  },
  {
    placeholder: "Никнейм*",
    types: [AUTH_PAGE_TYPES.REGISTER],
    required: true,
  },
  {
    placeholder: "E-mail@gmail.com",
    types: [AUTH_PAGE_TYPES.REGISTER],
    required: false,
  },
  ,
  {
    placeholder: "Пароль*",
    types: [AUTH_PAGE_TYPES.LOGIN, AUTH_PAGE_TYPES.REGISTER],
    required: true,
  },
];

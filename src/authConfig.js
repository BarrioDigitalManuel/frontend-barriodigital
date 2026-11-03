import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "75b2737f-ad39-4105-8071-b600a0dd3133",
    authority: "https://login.microsoftonline.com/c84d068c-d86d-427c-a579-0b73b33f73be",
    redirectUri: "http://localhost:5173",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) return;
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read", "openid", "profile"],
};
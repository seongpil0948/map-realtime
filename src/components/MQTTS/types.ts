export interface IReqOptions {
  method: string;
  meta?: object;
  headers?: any;
  data?: object;
  params?: any;
  body?: BodyInit;
  timeout?: number;
  xCommand: string;
}
//
export interface ISystemError {
  code?: string;
  httpStatusCode?: number;
  message?: string;
}

export enum ELoginErrorMessage {
  LOGIN_LOCK = "40000111",
  LOGIN_CANCEL = "40000112",
  LOGIN_TOKEN_EXPIRED = "40000113",
  LOGIN_BAD_TOKEN = "40000114",
  LOGIN_ALREADY_USE = "40000116",
  PASSWORD_CHANGE_DAYS = "40000117",
  LOGIN_FAILED = "40000118",
}

export enum ERequestCommand {
  INDEX = "P08000",
  LOGIN = "P08001",
  FIND_MY_ID = "P08002",
  FIND_MY_PASSWORD = "P08003",
  HOME = "P08004",
  WORK_SUMMARY = "P08005",
  MY_PAGE = "P08006",
  STATISTICS = "P08007",
  JOIN = "P08008",
}

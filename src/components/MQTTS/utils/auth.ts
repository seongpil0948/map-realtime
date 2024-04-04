import AES from "crypto-js/aes";
import { ERequestCommand } from "../types";
import { request } from "./request";
import { useUserStore } from "../composables/user";
import { useTokenStore } from "../composables/token";

// const encryptKey: string = import.meta.env.VITE_AES_PRIVATE_KEY;
// const encryptKey: string = "d9b89bda-5891-4750-b52c-3c7dcb0edb7c";
// const ID = "ssadmin";
// const ID = "manager";
// const PW = "1234";

export const doLogin = async () => {
  const token = useTokenStore();
  const user = useUserStore();
  // const password: string = AES.encrypt(PW, encryptKey).toString();
  // const password: string = "U2FsdGVkX1/886NU89Yqb16xSVzy0K7qngmtelq5GCs=";
  const formData = new FormData();
  formData.append("info1", "PT_CEO_USR_ID_0001");
  formData.append("info2", "U2FsdGVkX194cv83VpiWQJ307BO+GGGAwbtt5X5LBoM=");
  const response = await request("/login", {
    method: "POST",
    body: formData,
    xCommand: ERequestCommand.LOGIN,
  });
  // const respSms = await request(`/login/sendSmsAuth?usrId=${ID}`, {
  // const respSms = await request(`/login/sendSmsAuth?usrId=${ID}`, {
  //   method: "POST",
  //   xCommand: "P06001",
  // });
  // const authNumber =  (respSms.body as string).match(/\d+/g)
  // if (!authNumber || !authNumber[0]) {
  //   throw new Error("인증번호를 찾을 수 없습니다.");
  // }
  // const respCheckSms = await request(`/login/checkSmsAuth?authNum=${authNumber[0]}`, {
  //   method: "POST",
  //   xCommand: "P06001",
  // });
  // if (respCheckSms.httpStatusCode === 200) {
  //   console.log("로그인 성공");
  // }

  token.setNewToken(response.body.accessToken, response.body.refreshToken);
  const {
    customerCompanyId,
    roleId,
    mqttPassword,
    mqttDeviceId,
    userId,
    userName,
  } = response.body;
  user.setUser({
    userId,
    userName,
    customerCompanyId,
    roleId,
    mqttPassword,
    mqttDeviceId,
  });
};

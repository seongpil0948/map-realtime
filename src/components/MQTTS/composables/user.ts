import { acceptHMRUpdate, defineStore } from "pinia";

export interface IUser {
  userId: string;
  userName: string;
  customerCompanyId: string;
  roleId: string;
  mqttPassword: string;
  mqttDeviceId: string;
}
const key = "user";

export const useUserStore = defineStore("user", {
  state: () => {
    if (typeof localStorage !== "undefined") {
      const user = JSON.parse(<string>localStorage.getItem(key));
      return {
        userId: user?.userId || "",
        userName: user?.userName || "",
        customerCompanyId: user?.customerCompanyId || "",
        roleId: user?.roleId || "",
        mqttPassword: user?.mqttPassword || "",
        mqttDeviceId: user?.mqttDeviceId || "",
        installPlaceId: user?.installPlaceId || 0,
        installPlaceName: user?.installPlaceName || 0,
        myPageInstallPlaceName: user?.myPageInstallPlaceName || "",
      };
    } else {
      return {
        userId: "",
        userName: "",
        customerCompanyId: "",
        roleId: "",
        mqttPassword: "",
        mqttDeviceId: "",
        installPlaceId: 0,
        installPlaceName: 0,
        myPageInstallPlaceName: "",
      };
    }
  },
  actions: {
    setUser({
      userId,
      userName,
      customerCompanyId,
      roleId,
      mqttPassword,
      mqttDeviceId,
    }: IUser) {
      this.userId = userId;
      this.userName = userName;
      this.customerCompanyId = customerCompanyId;
      this.roleId = roleId;
      this.mqttPassword = mqttPassword;
      this.mqttDeviceId = mqttDeviceId;
      localStorage.setItem(key, JSON.stringify(this.$state));
    },
    setInstallPlace(
      installPlaceId: number,
      installPlaceName: string,
      myPageInstallPlaceName: string
    ) {
      this.installPlaceId = installPlaceId;
      this.installPlaceName = installPlaceName;
      this.myPageInstallPlaceName = myPageInstallPlaceName;
      localStorage.setItem(key, JSON.stringify(this.$state));
    },
    removeUser() {
      this.userId = "";
      this.userName = "";
      this.customerCompanyId = "";
      this.roleId = "";
      this.mqttPassword = "";
      this.mqttDeviceId = "";
      this.installPlaceId = 0;
      this.installPlaceName = 0;
      this.myPageInstallPlaceName = "";
      localStorage.removeItem(key);
    },
    setMqttToken(mqttDeviceId: string, mqttPassword: string) {
      this.mqttDeviceId = mqttDeviceId;
      this.mqttPassword = mqttPassword;
    },
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));

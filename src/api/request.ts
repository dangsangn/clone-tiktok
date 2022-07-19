import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import STATUS_CODE from "../config";

interface ResponseData<T> {
  code: number;

  data: T;

  msg: string;
}

axios.defaults.headers.common = {
  "Content-Type": "application/json;charset=utf-8",
};

axios.defaults.baseURL = process.env.REACT_APP_BASE_API;

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = ""; // getToken();

    /* eslint-disable  no-param-reassign */
    if (token && config.headers) {
      config.headers.token = token;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    if (!response.data) {
      return Promise.resolve(response);
    }
    if (response.status === STATUS_CODE.LOGIN_EXPIRE) {
      // Modal.confirm({
      //   title: "系统提示",
      //   content: response.data.msg,
      //   okText: "重新登录",
      //   onOk() {
      //     store.dispatch(clearSideBarRoutes());
      //     store.dispatch(logout());
      //     window.location.href = `${
      //       window.location.origin
      //     }/react-ant-admin/system/login?redirectURL=${encodeURIComponent(
      //       window.location.href
      //     )}`;
      //   },
      //   onCancel() {},
      // });

      return Promise.reject(new Error(response.data.msg));
    }

    if (response.status === STATUS_CODE.SUCCESS_CODE) {
      return response.data as any;
    }

    return Promise.reject(new Error(response.data.msg));
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export function request<T>(options: AxiosRequestConfig) {
  return axios.request<T>(options);
}

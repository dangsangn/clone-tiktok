import { request } from "@/api/request";

export type ParamsProps = {
  q: string;
  type?: "less" | "more";
};
export function apiSearchUser(params?: ParamsProps) {
  return request({
    method: "GET",
    url: "/users/search",
    params,
  });
}

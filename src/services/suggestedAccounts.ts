import { request } from "@/api/request";
import { ParamsProps, ResponseType } from "./type";

export function apiSuggestedAccounts(
  params?: ParamsProps
): Promise<ResponseType<any>> {
  return request({
    method: "GET",
    url: "/users/search?q=n",
    params,
  });
}

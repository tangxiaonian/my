import {request} from "./index";

export function loginRequest(params, success, fail) {
    request({
        url: "/oauth/token",
        method: "POST",
        params
    }, success, fail);
};

export function getUserInfo(params, success, fail) {
    request({
        url: "/oauth/userInfo",
        method: "get",
        params
    }, success, fail);
}

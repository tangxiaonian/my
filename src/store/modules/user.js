import {loginRequest,getUserInfo} from "../../api/user";

export default {
    namespaced: true,
    state: {
        token: "",
        userInfo: null
    },
    mutations: {
        SET_TOKEN(state,token) {
            state.token = token;
        },
        SET_USER_INFO(state,userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        async login({commit},{password,username}) {
            // 1.登录获取token
            let result = await new Promise(((resolve, reject) => {
                loginRequest({
                    grant_type:"password",
                    password,
                    username,
                    scope: "backend",
                    client_secret:"secret",
                    client_id:"clientId"
                }, resolve, reject);
            }));
            let token = result.data.access_token;
            // 2.获取用户信息
            commit("SET_TOKEN", token);
            result = await new Promise(((resolve, reject) => {
                getUserInfo({}, resolve, reject);
            }));
            commit("SET_USER_INFO", result.data);
            return "success";
        }
    }
};

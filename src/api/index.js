import axios from "axios";
import {Message} from 'element-ui';
import store from "../store/index";

let instance = new axios.create({
    baseURL: "http://localhost:8888/api",
    timeout: 5000,
});
instance.interceptors.request.use(function (config) {
    let token = store.state.users.token;
    if (token) {
        config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
},function () {
    Message.error('请求发生了错误...');
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
    //1.数据响应成功
    return response;
},function (error) {
    // 响应数据时出现错误
    console.log(error);
    Message.error('response发生了错误...');
});

export async function request(config,success,fail){
    let obj = {
        method: config.method || "GET",
        url: config.url
    };
    // 自定义请求参数
    if (config.headers) {
        obj.headers = config.headers;
    }
    // post 请求
    if (config.method && config.method !== 'GET'){
        if (config.params) {
            obj.params = config.params;
        }else {
            obj.data = config.data;
        }
    }else {
        // get 请求
        obj.params = config.data;
    }
    try {
        let result = await instance.request(obj);
        success(result);
    }catch (e) {
        fail(e);
        Message.error('请求发生了错误...');
    }

}

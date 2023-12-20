import axios from "axios";
import { storage } from "@/services";
import { Endpoint } from "@/constants";
import { setIsLoading } from "@/redux/slices/appSlice";
import store from "@/redux/store";

export class Client {
  BASE_URL = "https://danit-final-twitter-8f32e99a3dec.herokuapp.com";

  constructor() {
    this.session = axios.create({ baseURL: this.BASE_URL });
    this.#addRequestInterceptors();
    this.#addResponseInterceptors();
    this.get = this.session.get;
    this.post = this.session.post.bind(this.session);
    this.delete = this.session.delete;
    this.put = this.session.put;
  }

  #addResponseInterceptors() {
    this.session.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401 && storage.refreshToken) {
          storage.setTokens(storage.refreshToken, null);
          try {
            store.dispatch(setIsLoading(true));
            const response = await this.post(Endpoint.REFRESH_TOKEN);
            storage.setTokens(response.data.access_token, response.data.refresh_token);
          } catch {
            storage.setTokens(null, null);
          }
          location.reload();
        }
        return Promise.reject(error);
      },
    );
  }

  #addRequestInterceptors() {
    this.session.interceptors.request.use((config) => {
      if (storage.accessToken)
        config.headers.Authorization = `Bearer ${storage.accessToken}`;
      return config;
    });
  }
}

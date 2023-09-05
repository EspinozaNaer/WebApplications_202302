import axios from "axios";
import { LogoApiService } from "@/shared/service/logo-api.service";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2/',
});

export class NewsApiService {
    apiKey = 'd24b52ec6b1848428006244fecce23c1';
    logoApi = new LogoApiService();

    getSource() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId){
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source){
        return this.logoApi.getUrlLogo(source);
    }
}
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class ConciertoService {
    async getConciertos() {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://198.251.72.253:8080/boletaje/concierto/buscaConcierto/%20',
            headers: {
                'Content-Type': 'application/json',
            }

        };
        return axios(config)
            .then(response => {
                return response.data;
            });
    }
}

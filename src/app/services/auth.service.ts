import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  async login(username: string, password: string) {
    const data = JSON.stringify({
      "username": username,
      "password": password
    });
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://198.251.72.253:8080/boletaje/api/auth/signin',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };
    return axios(config)
      .then(response => {
        sessionStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
      });
  }

 
}
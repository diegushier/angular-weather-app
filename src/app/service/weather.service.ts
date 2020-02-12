import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  key = '77894fe46c6e15e96e19dc26cf2dacc1'
  URI: string = ''

  constructor(private http: HttpClient) {}

  getWeather(city: string, key: string){
      return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${key}&appid=${this.key}`);
  }
}

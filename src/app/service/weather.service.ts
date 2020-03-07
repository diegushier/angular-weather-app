import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  key = 'your_key' //here you need to useyour own gmail api key
  URI: string = ''

  constructor(private http: HttpClient) {}

  getWeather(city: string, key: string){
      return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${key}&appid=${this.key}`);
  }
}

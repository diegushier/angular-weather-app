import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {

  }

  getWeather(city: string, key: string) {
    this.weatherService.getWeather(city, key)
      .subscribe(
        res => {
          console.log(res),
            this.weather = res
        },
        err => console.log(err)
      )
  }

  submitLocation(city: HTMLInputElement, key: HTMLInputElement) {

    if (city.value && key.value) {
      this.getWeather(city.value, key.value)
      city.value = '';
      key.value = '';
    } else {
      alert('Please. Insert some values')
    }
    
    city.focus();
    return false;
  }
}

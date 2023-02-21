import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  clock: string = '';
  weather: any = null;
  temperature: any = null;
  weatherCode: any;
  iconClass!: string;

  ngOnInit() {
    this.updateClock();
    this.getWeather();
  }

  updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes: number | string = now.getMinutes();

    // Add leading zeros to minutes and seconds
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    this.clock = `${hours}:${minutes}`;

    // Schedule the next update
    setTimeout(() => this.updateClock(), 1000);
  }

  async getWeather() {
    this.weather = true;
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.48&longitude=7.2162&hourly=temperature_2m&current_weather=true');

    const data = await response.json();
    const temp = data['current_weather'].temperature;
    this.weatherCode = data['current_weather'].weathercode;
    let weatherDesc: string = '';

    switch (this.weatherCode) {
      case 0:
        weatherDesc = 'Clear sky';
        this.iconClass = 'fas fa-sun';
        break;
      case 1:
        weatherDesc = 'Mainly clear';
        this.iconClass = 'fas fa-sun';
        break;
      case 2:
        weatherDesc = 'Partly cloudy';
        this.iconClass = 'fas fa-cloud-sun';
        break;
      case 3:
        weatherDesc = 'Overcast';
        this.iconClass = 'fas fa-cloud';
        break;
      case 45:
        weatherDesc = 'Fog';
        this.iconClass = 'fas fa-smog';
        break;
      case 48:
        weatherDesc = 'Depositing rime fog';
        this.iconClass = 'fas fa-smog';
        break;
      case 51:
        weatherDesc = 'Drizzle light';
        this.iconClass = 'fas fa-cloud-rain';
        break;
      case 53:
        weatherDesc = 'Drizzle moderate';
        this.iconClass = 'fas fa-cloud-rain';
        break;
      case 55:
        weatherDesc = 'Drizzle dense intensity';
        this.iconClass = 'fas fa-cloud-showers-heavy';
        break;
      case 56:
        weatherDesc = 'Freezing Drizzle Light';
        this.iconClass = 'fas fa-snowflake';
        break;
      case 57:
        weatherDesc = 'Freezing Drizzle dense intensity';
        this.iconClass = 'fas fa-snowflake';
        break;
      case 61:
        weatherDesc = 'Rain Slight';
        this.iconClass = 'fas fa-cloud-rain';
        break;
      case 63:
        weatherDesc = 'Rain moderate';
        this.iconClass = 'fas fa-cloud-rain';
        break;
      case 65:
        weatherDesc = 'Rain heavy intensity';
        this.iconClass = 'fas fa-cloud-showers-heavy';
        break;
      case 66:
        weatherDesc = 'Freezing Rain Light';
        this.iconClass = 'fas fa-snowflake';
        break;
      case 67:
        weatherDesc = 'Freezing Rain heavy intensity';
        this.iconClass = 'fas fa-snowflake';
        break;
      case 71:
        weatherDesc = 'Snow fall slight';
        this.iconClass = 'fas fa-snowflake';
        break;
      case 73:
        weatherDesc = 'Snow fall moderate';
        this.iconClass = 'fas fa-snowflake';
        break;
      case 75:
        weatherDesc = 'Snow fall heavy intensity';
        this.iconClass = 'fas fa-snowflake';
        break;
      case 77:
        weatherDesc = 'Snow grains';
        this.iconClass = 'fas fa-snowflake';
        break;
      case 80:
        weatherDesc = 'Rain showers slight';
        this.iconClass = 'fas fa-cloud-showers-heavy';
        break;
      case 81:
        weatherDesc = 'Rain showers moderate';
        this.iconClass = 'fas fa-cloud-showers-heavy';
        break;
      case 82:
        weatherDesc = 'Rain showers violent';
        this.iconClass = 'fas fa-cloud-showers-heavy';
        break;
      case 85:
        weatherDesc = 'Snow showers slight';
        this.iconClass = 'fas fa-snowflake';
        break;
      case 86:
        weatherDesc = 'Snow showers heavy';
        this.iconClass = 'fas fa-snowflake';
        break;
      case 95:
        weatherDesc = 'Thunderstorms';
        this.iconClass = 'fas fa-bolt';
        break;
      case 96:
        weatherDesc = 'Thunderstorm with slight hail';
        this.iconClass = 'fas fa-bolt';
        break;
      case 99:
        weatherDesc = 'Thunderstorm with  heavy hail';
        this.iconClass = 'fas fa-bolt';
        break;
      default:
        weatherDesc = 'Unknown weather';
        break;
    };
    this.weather = `${weatherDesc}`;
    this.temperature = `${temp} °C`;
  }
}

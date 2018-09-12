import { Component } from "@angular/core";
import { UiService } from "./services/ui/ui.service";
import { WeatherService } from "./services/weather/weather.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public ui: UiService, public weather: WeatherService) {}

  title = "weather-app";
  darkModeActive: boolean;
  showMenu = false;
  city: string;

  ngOnInit() {
    this.ui.darkModeState.subscribe(value => {
      this.darkModeActive = value;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  submitSearch(city) {
    this.city = city;
    this.weather.getForecast(this.city);
    this.weather.getCityWeatherByName(this.city);
  }
}

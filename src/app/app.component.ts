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

  submitSearch(city: string) {
    this.weather.getForecast(city);
    this.weather.getCityWeatherByName(city);
    console.log(this.weather.getCurrenteTemp(city));
  }
}

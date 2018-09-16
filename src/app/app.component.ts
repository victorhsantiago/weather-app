import { Component, ViewChild } from "@angular/core";
import { UiService } from "./services/ui/ui.service";
import { WeatherService } from "./services/weather/weather.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})

export class AppComponent {
	constructor(public ui: UiService, public weather: WeatherService) { }

	title = "weather-app";
	darkModeActive: boolean;
	showMenu = false;
	city;
	@ViewChild('cityInput') cityInput;

	ngOnInit() {
		this.ui.darkModeState.subscribe(value => {
			this.darkModeActive = value;
		});
	}

	// ngAfterViewInit() {
	//   debugger
	//   this.cityInput.valueChanges
	//     .debounceTime(500) //before emitting last event
	//     .distinctUntilChanged()
	//     .subscribe((value) => {
	//       console.log('delayed key press value', value);
	//       this.city = value
	//     });
	// }

	toggleMenu() {
		this.showMenu = !this.showMenu;
	}

	modeToggleSwitch() {
		this.ui.darkModeState.next(!this.darkModeActive);
	}

	submitSearch(city: string) {
		this.city = city;
	}
}

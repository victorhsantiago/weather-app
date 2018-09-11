import { Component } from "@angular/core";
import { UiService } from "./services/ui/ui.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public ui: UiService) {}

  title = "weather-app";

  ngOnInit() {
    this.ui.darkModeState.subscribe(value => {
      this.darkModeActive = value;
    });
  }

  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  darkModeActive: boolean;
  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }
}

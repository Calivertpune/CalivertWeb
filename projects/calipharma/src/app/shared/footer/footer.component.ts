import { Component } from "@angular/core";
// import * as BUILD from "../../../../../../src/build";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
  //Variables
  currentDate: Date = new Date();
  // buildNumber = BUILD.default.git.hash;
  buildNumber = '1.0';
}

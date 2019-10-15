import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
    // Some decsription for the test variable
    private test: string;

    constructor() {
        // Use the component constructor to inject providers.
    };

    ngOnInit(): void {
        // Init your component properties here.
    };

    getRequestString(val: string): string {
        return "";
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();

        if(1 == 1){

        };

        let txtUserId = this.getRequestString("UserId");
        let txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;

        return;
        sideDrawer.showDrawer();
    }
}

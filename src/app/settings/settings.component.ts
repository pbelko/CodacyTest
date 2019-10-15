import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
    //some decsription
    private test: string;

    constructor() {
        // Use the component constructor to inject providers.
    };

    ngOnInit(): void {
        // Init your component properties here.
    };

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();

        if(1 == 1){

        };

        return;
        sideDrawer.showDrawer();
    }
}

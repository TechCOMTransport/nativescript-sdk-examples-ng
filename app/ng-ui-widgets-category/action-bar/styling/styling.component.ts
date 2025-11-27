import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    
    templateUrl: "./styling.component.html"
})
export class ActionBarStylingComponent {

    constructor(private routerExtensions: RouterExtensions) { }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}

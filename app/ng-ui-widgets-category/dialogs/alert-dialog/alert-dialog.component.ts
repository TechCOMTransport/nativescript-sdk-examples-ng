import { Component } from "@angular/core";
import { Dialogs } from "@nativescript/core";

@Component({
    
    templateUrl: "./alert-dialog.component.html"
})
export class AlertDialogComponent {
    displayAlertDialog() {
        // >> alert-dialog-code
        let options = {
            title: "Race selection",
            message: "Race chosen: Unicorn",
            okButtonText: "OK"
        };

        Dialogs.alert(options).then(() => {
            console.log("Race chosen!");
        });
        // << alert-dialog-code
    }
}

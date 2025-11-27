import { Component } from "@angular/core";
import { Dialogs } from "@nativescript/core";

@Component({
    
    templateUrl: "./confirm-dialog.component.html"
})
export class ConfirmDialogComponent {
    displayConfirmDialog() {
        // >> confirm-dialog-code
        let options = {
            title: "Race selection",
            message: "Are you sure you want to be a Unicorn?",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Cancel"
        };

        Dialogs.confirm(options).then((result: boolean) => {
            console.log(result);
        });
        // << confirm-dialog-code
    }
}

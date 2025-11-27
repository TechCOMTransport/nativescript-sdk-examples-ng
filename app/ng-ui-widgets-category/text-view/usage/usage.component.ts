// >> textview-edit-disable-code
import { Component } from "@angular/core";
import { EventData, TextView } from "@nativescript/core";

@Component({
    
    templateUrl: "./usage.component.html"
})
export class UsageComponent {
    tvtext = "";

    onTextChange(args: EventData) {
        const tv = args.object as TextView;
        console.log(tv.text);
    }
}
// << textview-edit-disable-code

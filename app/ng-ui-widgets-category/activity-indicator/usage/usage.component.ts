// >> activity-indicator-setting-busy-tsc
import { Component } from "@angular/core";
import { ActivityIndicator, EventData } from "@nativescript/core";

@Component({
    
    templateUrl: "./usage.component.html"
})
export class ActivityIndicatorUsageComponent {
    isBusy: boolean = true;

    onBusyChanged(args: EventData) {
        let indicator: ActivityIndicator = <ActivityIndicator>args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
    }
}
// << activity-indicator-setting-busy-tsc

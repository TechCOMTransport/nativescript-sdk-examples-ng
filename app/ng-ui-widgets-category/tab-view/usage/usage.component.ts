// >> tab-view-require
import { Component } from "@angular/core";
import { EventData } from "@nativescript/core";

interface SelectedIndexChangedEventData extends EventData {
    oldIndex: number;
    newIndex: number;
}

@Component({
    
    templateUrl: "./usage.component.html"
})
export class BasicTabViewComponent {
    onSelectedIndexchanged(args: SelectedIndexChangedEventData) {
        let newIndex = args.newIndex;
    }
}
// << tab-view-require

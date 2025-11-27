// >> progress-create-code
import { Component, OnInit } from "@angular/core";

@Component({
    
    templateUrl: "./styling.component.html",
    styleUrls: ["./styling.component.css"]
})
export class StylingComponent implements OnInit {
    public progressValue: number;

    ngOnInit() {
        this.progressValue = 25;
    }
}
// << progress-create-code

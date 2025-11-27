// >> custom-directive-code
import { Component, Directive, ViewContainerRef, TemplateRef } from "@angular/core";
import { Device, platformNames } from "@nativescript/core";

@Directive({ selector: "[sdkIfAndroid]" })
export class IfAndroidDirective {
    constructor(container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (Device.os === platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
}

@Directive({ selector: "[sdkIfIos]" })
export class IfIosDirective {
    constructor(container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (Device.os === platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
}

@Component({
    
    templateUrl: "./create-custom-directive.component.html",
})
export class CreateCustomDirectiveExampleComponent {
}
// << custom-directive-code

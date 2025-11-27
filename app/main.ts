import "./polyfills";
import "reflect-metadata";
import { runNativeScriptAngularApp, platformNativeScript } from "@nativescript/angular";
import { AppModule } from "./app.module";
import { Application, isIOS } from "@nativescript/core";
import { MyDelegate } from "./delegate/my-delegate";

if (isIOS) {
    Application.ios.delegate = MyDelegate;
}

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

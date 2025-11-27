(global as any).__Zone_disable_XHR = true;
import "zone.js";

// Polyfill for performance API required by Angular 18+
if (typeof global.performance === 'undefined') {
    (global as any).performance = {
        now: () => Date.now(),
        mark: (name: string) => {},
        measure: (name: string, startMark?: string, endMark?: string) => {},
        getEntriesByName: (name: string) => [],
        clearMarks: (name?: string) => {},
        clearMeasures: (name?: string) => {},
        toJSON: () => {}
    };
}

// Polyfill for queueMicrotask required by Angular 18+ / RxJS
if (typeof global.queueMicrotask === 'undefined') {
    global.queueMicrotask = (callback: VoidFunction) => {
        Promise.resolve().then(callback);
    };
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let container = new Map();
function Injectable(args) {
    return function (target) {
        container.set(args["key"], new target());
    };
}
function Inject(name) {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: () => container.get(name),
            configurable: true
        });
    };
}
let TestInjectable = class TestInjectable {
};
TestInjectable = __decorate([
    Injectable({ key: "TestInjectable" })
], TestInjectable);
class TestInject {
    print() {
        console.log(this.testField);
    }
}
__decorate([
    Inject("TestInjectable")
], TestInject.prototype, "testField", void 0);
const test = new TestInject();
test.print();

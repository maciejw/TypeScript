//// [inheritanceStaticAccessorOverridingAccessor.ts]
class a {
    static get x() {
        return "20";
    }
    static set x(aValue: string) {

    }
}

class b extends a {
    static get x() {
        return "20";
    }
    static set x(aValue: string) {

    }
}

//// [inheritanceStaticAccessorOverridingAccessor.js]
var __extendStatics = (this && this.__extendStatics) ||
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
var __extends = (this && this.__extends) || function (d, b) {
    __extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var a = (function () {
    function a() {
    }
    Object.defineProperty(a, "x", {
        get: function () {
            return "20";
        },
        set: function (aValue) {
        },
        enumerable: true,
        configurable: true
    });
    return a;
}());
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        return _super.apply(this, arguments) || this;
    }
    Object.defineProperty(b, "x", {
        get: function () {
            return "20";
        },
        set: function (aValue) {
        },
        enumerable: true,
        configurable: true
    });
    return b;
}(a));

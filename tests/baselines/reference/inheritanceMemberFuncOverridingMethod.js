//// [inheritanceMemberFuncOverridingMethod.ts]
class a {
    x() {
        return "10";
    }
}

class b extends a {
    x() {
        return "20";
    }
}

//// [inheritanceMemberFuncOverridingMethod.js]
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
    a.prototype.x = function () {
        return "10";
    };
    return a;
}());
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        return _super.apply(this, arguments) || this;
    }
    b.prototype.x = function () {
        return "20";
    };
    return b;
}(a));

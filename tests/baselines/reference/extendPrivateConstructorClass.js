//// [extendPrivateConstructorClass.ts]
declare namespace abc {
    class XYZ {
        private constructor();
    }
}

class C extends abc.XYZ {
}


//// [extendPrivateConstructorClass.js]
var __extendStatics = (this && this.__extendStatics) ||
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
var __extends = (this && this.__extends) || function (d, b) {
    __extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        return _super.apply(this, arguments) || this;
    }
    return C;
}(abc.XYZ));

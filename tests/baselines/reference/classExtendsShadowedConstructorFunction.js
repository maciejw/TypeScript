//// [classExtendsShadowedConstructorFunction.ts]
class C { foo: string; }

module M {
    var C = 1;
    class D extends C { // error, C must evaluate to constructor function
        bar: string;
    }
}

//// [classExtendsShadowedConstructorFunction.js]
var __extendStatics = (this && this.__extendStatics) ||
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
var __extends = (this && this.__extends) || function (d, b) {
    __extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C = (function () {
    function C() {
    }
    return C;
}());
var M;
(function (M) {
    var C = 1;
    var D = (function (_super) {
        __extends(D, _super);
        function D() {
            return _super.apply(this, arguments) || this;
        }
        return D;
    }(C));
})(M || (M = {}));

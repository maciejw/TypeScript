//// [indirectSelfReferenceGeneric.ts]
class a<T> extends b<T> { }
class b<T> extends a<T> { }

//// [indirectSelfReferenceGeneric.js]
var __extendStatics = (this && this.__extendStatics) ||
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
var __extends = (this && this.__extends) || function (d, b) {
    __extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var a = (function (_super) {
    __extends(a, _super);
    function a() {
        return _super.apply(this, arguments) || this;
    }
    return a;
}(b));
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        return _super.apply(this, arguments) || this;
    }
    return b;
}(a));

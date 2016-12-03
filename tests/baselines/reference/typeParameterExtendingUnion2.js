//// [typeParameterExtendingUnion2.ts]
class Animal { run() { } }
class Cat extends Animal { meow }
class Dog extends Animal { woof }

function run(a: Cat | Dog) {
    a.run();
}

function f<T extends Cat | Dog>(a: T) {
    a.run();
    run(a);
}

//// [typeParameterExtendingUnion2.js]
var __extendStatics = (this && this.__extendStatics) ||
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
var __extends = (this && this.__extends) || function (d, b) {
    __extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.run = function () { };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
function run(a) {
    a.run();
}
function f(a) {
    a.run();
    run(a);
}

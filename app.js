var a = 1;
var b = 'hyungjun';
var Plus = function (a, b) {
    return a + b;
};
var person = /** @class */ (function () {
    function person() {
        this.gender = 'string';
        this.name = 'string';
        this.age = 25;
    }
    person.prototype.setName = function (name) {
        console.log(name);
    };
    return person;
}());
var hyunjun = new person();
hyunjun.setName('hungjun');

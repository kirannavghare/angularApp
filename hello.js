var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.getFullName = function () {
    };
    person.prototype.getAddress = function () {
        return "PUNE";
    };
    return person;
}());
;
var obj = new person();
console.log(obj.getAddress());

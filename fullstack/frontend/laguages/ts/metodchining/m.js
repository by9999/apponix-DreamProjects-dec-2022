var Students = /** @class */ (function () {
    function Students() {
        this.name = 'xyz';
        this.id = 123,
            this.face = true;
    }
    Students.prototype.withface = function () {
        console.log('they will smile');
    };
    Students.prototype.withname = function () {
        console.log('we can call studet');
    };
    return Students;
}());
var gopi = new Students();
gopi.withface();
gopi.withname();

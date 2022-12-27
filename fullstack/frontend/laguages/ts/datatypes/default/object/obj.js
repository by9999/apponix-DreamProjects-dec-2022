var remote = {
    buttons: true,
    batry: { compy: 'durocell', chrges: { posative: ' s positive', nagative: 'yes' } },
    led: 1,
    color: 'red'
};
console.log(remote.batry.chrges.posative);
var Human = /** @class */ (function () {
    function Human() {
        this.eyes = 2,
            this.nose = "one nose",
            this.head = 1;
    }
    Human.prototype.witheyes = function () {
        console.log('people can see with eyes');
    };
    Human.prototype.withhead = function () {
        console.log('with head we play dicchi');
    };
    return Human;
}());
var Sarynya = new Human();
console.log(Sarynya);

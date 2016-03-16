define("./dist/js/Person-debug", [], function(require, exports, module) {
    // var $ = require('jquery');
    console.log("Person Class");
    // $('body').css('background','#ccc');
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    module.exports = Person;
    Person.prototype.say = function() {
        console.log("my name is :" + this.name);
    };
});
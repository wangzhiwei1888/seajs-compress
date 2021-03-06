// 所有模块都通过 define 来定义
define("./dist/js/main", [ "../js/jquery", "./Person", "../js/data", "../js/user" ], function(require, exports, module) {
    // var $ = require('../lib/jquery/jquery-git.js');
    var $ = require("../js/jquery");
    console.log("main");
    $("body").css("background", "red");
    // 同步
    var Person = require("./Person");
    var p = new Person("wzw", 18);
    p.say();
    //异步
    // require.async('./Person', function(Person) {
    // 	var p = new Person('wzw', 18);
    // 	p.say();
    // })
    //数据
    var users = require("../js/data");
    console.log(users);
    users.forEach(function(item, index) {
        console.log(index, item);
        $("body").append("<p>" + index + ":" + item + "</p>");
    });
    var user = require("../js/user");
    console.log(user);
    for (var index in user) {
        $("body").append("<p>" + index + ":" + user[index] + "</p>");
    }
});
define("./dist/main.js" , ["Person.js","data.js","user.js"], function(require , exports , module){


// 所有模块都通过 define 来定义


	// var $ = require('jquery');
	console.log('main');
	// $('body').css('background', 'red');

	// 同步
	var Person =require("Person.js");
	var p = new Person('wzw',18);
	p.say();

	//异步
	// require.async('./Person', function(Person) {

	// 	var p = new Person('wzw', 18);
	// 	p.say();

	// })

	//数据

	var users =require("data.js");

	console.log(users);

	users.forEach(function(item,index){

		console.log(index,item);

		// $('body').append('<p>'+index+':'+item+'</p>')

	})

	var user =require("user.js");

	console.log(user);

	for(var index in user){

		// $('body').append('<p>'+index+':'+user[index]+'</p>')
	}

});
define("Person.js" , [], function(require , exports , module){


    
    // var $ = require('jquery');
    console.log("Person Class");
    
    // $('body').css('background','#ccc');

    function Person(name,age){

        this.name = name;
        this.age = age;
    }

    module.exports = Person;

    Person.prototype.say = function () {
        console.log("my name is :"+this.name);
    }
    
})
define("data.js" , [], function(require , exports , module){


    var data = ['wzw','wangxu','shenlei','yaojian'];

    module.exports = data;
});



define("user.js" , [], function(require,exports,module){
    var data = {
		"name":"wzw",
		"age":18,
		"tel":"13521499301"
	};

    module.exports = data;
    
});


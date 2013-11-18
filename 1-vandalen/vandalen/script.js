"use strict";

    var makePerson = function(persArr){
    
    persArr.sort(function(a, b){
    return a.age-b.age;
    });
    var minAge = persArr[0].age;
    
	// Din kod här...
	var result = {minAge: minAge};
	return result;
    };

    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

    var result = makePerson(data);

    console.log(result);


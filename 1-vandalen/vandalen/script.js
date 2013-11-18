"use strict";

    var makePerson = function(persArr){
    var length = persArr.length;
    var sum =  0;
    
    for (var i = 0; i < length; ++i) {
        sum += persArr[i].age;
    }
    var avAge = Math.round(sum / length);
    
    persArr.sort(function(a, b){
    return a.age-b.age;
    });
    var minAge = persArr[0].age;
    
    persArr.sort(function(a, b){
    return b.age-a.age;
    });
    var maxAge = persArr[0].age;
    

	// Din kod här...
	var result = {minAge: minAge, maxAge: maxAge, averageAge : avAge,};
	return result;
    };
    

    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

    var result = makePerson(data);

    console.log(result);


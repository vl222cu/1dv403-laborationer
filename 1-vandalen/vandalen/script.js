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
    
    persArr.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    });
    var allNames = "";
    
    for (i = 0; i < length; ++i) {
        allNames += persArr[i].name + ", ";
    }
    allNames = allNames.trim();
    
	var result = {minAge: minAge, maxAge: maxAge, averageAge : avAge, names: allNames};
	return result;
    };
    

    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

    var result = makePerson(data);

    console.log(result);


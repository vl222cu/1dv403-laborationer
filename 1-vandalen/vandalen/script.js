"use strict";

    var makePerson = function(persArr){
    var length = persArr.length;
    var sum =  0;
    // Uträkning av medelåldern
    for (var i = 0; i < length; ++i) {
        sum += persArr[i].age;
    }
    var avAge = Math.round(sum / length);
    // Sorterar för att få fram minimumåldern
    persArr.sort(function(a, b){
    return a.age-b.age;
    });
    var minAge = persArr[0].age;
    // Sorterar för att få fram maxåldern
    persArr.sort(function(a, b){
    return b.age-a.age;
    });
    var maxAge = persArr[0].age;
    // Sorterar namnen i bokstavsordning
    persArr.sort(function(a, b){
    var nameA = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    return nameA ? nameA : a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    });
    // Trimmar utskrift av namnen
    var allNames = "";
    for (i = 0; i < length; ++i) {
        allNames += persArr[i].name + ", ";
    }
    allNames = allNames.trim();
    allNames = allNames.replace(/(^\s*,)|(,\s*$)/g, "");
    // Resultatet på värdena som ska skrivas ut
	var result = {minAge: minAge, maxAge: maxAge, averageAge : avAge, names: allNames};
	return result;
    };
    

    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

    var result = makePerson(data);

    console.log(result);


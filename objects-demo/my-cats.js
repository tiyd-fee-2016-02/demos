var myCats = [
    {name: "Toby",
    age: 4},
    {name: "Kipling",
    age: 5},
    {name: "Libby",
    age: 8}
];

//Matt's Solution
//for (var arrayIndex = 0; arrayIndex < myCats.length; arrayIndex++) {
//    console.log(myCats[arrayIndex].name + " is " + myCats[arrayIndex].age + " years old.");
//}

for (var arrayIndex = 0; arrayIndex < myCats.length; arrayIndex++){
    var myCat = myCats[arrayIndex];
    console.log(myCat.name + " is " + myCat.age + " years old.");
}

// Cat's name and age in following format:
// "Toby is 4 years old."
// "Kipling is 5 years old."

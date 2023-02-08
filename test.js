const StudentDB = require('./StudentDB');


StudentDB.init("./dbjson.json");
StudentDB.create({
    name: "Dipesh",
    age: 55,
    gender: "M"
});

// StudentDB.update({
//     id: "7311130",
//     name: "Aks",
//     age: 55,
//     gender: 'M'
// });

// StudentDB.read();

// x.delete(2);
// x.delete(4);
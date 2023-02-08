const fs = require('fs');
const path = require('path');
var fileName = "";

var students = [];

const writeFunction = (data) => {
    fs.writeFile(fileName, data, 'utf8', err => {
        if (err) {
            console.log(`Error writing file: ${err}`)
        } else {
            console.log(`File is written successfully!`)
        }
    });
}

const readFunction = () => {
    // fs.readFile(fileName, 'utf8', (err, data) => {
    //     if (err) {
    //         console.log(`Error reading file from disk: ${err}`)
    //     } else {
    //         const databases = JSON.parse(data);
    //         return databases;
    //     }
    // });
    let db = fs.readFileSync(fileName, 'utf8');
    return JSON.parse(db);
}

id = 0;

exports.init = (initFilePath) => {
    if (!fs.existsSync(initFilePath)) {
        fs.writeFile(initFilePath, "", err => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            } else {
                console.log(`File created successfully!`);
            }
        });
        fileName = initFilePath;
    } else {
        fileName = initFilePath;
        let existedData = readFunction();
        students = existedData;
        console.log('file already existed');
    }
}

exports.create = (studentDetail) => {
    students = readFunction();
    this.id++;
    studentDetail['id'] = this.id;
    students.push(studentDetail);
    const data = JSON.stringify(students);
    writeFunction(data);
}

exports.update = (studentObj) => {
    students = readFunction();
    students = students.filter(d => d.id != studentObj.id)
    students.push(studentObj);
    data = JSON.stringify(students);
    writeFunction(data);
}

exports.read = () => {
    let data = readFunction();
    console.log(data);
}

exports.delete = (id) => {
    students = readFunction();
    students = students.filter(d => d.id != id);
    console.log(students);
    data = JSON.stringify(students);
    writeFunction(data);
}



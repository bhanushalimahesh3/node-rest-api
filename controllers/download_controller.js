// import { Parser } from 'json2csv';
var {Parser} = require('json2csv');
const csv=require('csvtojson')
const userFile = abs_path('/users_list.csv');

const downloadUserList = function(req, res, next) {
    const json2csv = new Parser({fields: ["Name", "Email Test"] });
    const csv = json2csv.parse([{Name:"mahesh", "Email Test":"mahesh@gmail.com"}]);
    res.header('Content-Type', 'text/csv');
    res.attachment('users.csv');
    res.send(csv);
}

const uploadUserList = async function(req, res, next) {

    const converter= await csv()
    .fromFile(userFile)

    console.log(converter)
    res.json('upload');

}

module.exports = {downloadUserList,
                  uploadUserList}
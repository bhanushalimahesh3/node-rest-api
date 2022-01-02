// import { Parser } from 'json2csv';
var {Parser} = require('json2csv');
console.log(Parser)
const downloadUserList = function(req, res, next) {
    const json2csv = new Parser({fields: ["Name", "Email Test"] });
    const csv = json2csv.parse([{Name:"mahesh", "Email Test":"mahesh@gmail.com"}]);
    res.header('Content-Type', 'text/csv');
    res.attachment('users.csv');
    res.send(csv);
}

module.exports.downloadUserList = downloadUserList;
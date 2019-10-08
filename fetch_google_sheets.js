const https = require('https');

// validate input url
let args = process.argv;
let isGoogleSheetUrl = true;

if (args.length < 3 | !isGoogleSheetUrl){
    console.log("Input correct google sheets url");
    process.exit();
} 

// extract sheet id
let sheetUrl = args[2];
let spreadSheetIdRegEx = RegExp('/spreadsheets/d/([a-zA-Z0-9-_]+)');
let spreadSheetId = sheetUrl.match(spreadSheetIdRegEx)[1];

// fetch data from google sheet
const API_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}?ranges=A356:H378&fields=properties.title,sheets(sheetProperties,data.rowData.values(effectiveValue,effectiveFormat))`;

https.get(API_ENDPOINT), (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(data));
    });
    

}).on("error", (err) => {
    console.log("Error: " + err.message);
});

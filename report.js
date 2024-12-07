const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection: `https://api.postman.com/collections/22141075-ff291059-b3a9-4f2e-b2d3-387d919f7a0b?access_key=${process.env.access_key}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    // environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.htmlnode .\report.js', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run is complete!');
});
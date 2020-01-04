const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

module.exports = (hookURL, filePath) => new Promise((resolve, reject) => {
    const form = new FormData();

    form.append('buffer', new Buffer.alloc(10));
    form.append('file', fs.createReadStream(filePath));
    
    form.submit(hookURL, (error, response) => {
        console.log(error);
        console.log(response);

        if (error) reject(error);
        else resolve(response);
    });
});

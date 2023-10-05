import express from 'express';
import formidable from 'formidable';

import * as fs   from 'fs';
import * as path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(dirname(import.meta.url));
const app = express();

console.log(__dirname);
 
app.post('/api/upload', (req, res, next) => {
 
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
            console.log('files', files)
        let oldPath = files.file.filepath;
        let newPath = path.join( __dirname, '/uploads'
            + '/' + files.file.name)

        let rawData = fs.readFileSync(oldPath)
 
        fs.writeFile(newPath, rawData, function (err) {
            if (err) console.log(err)
            return res.send("Successfully uploaded")
        })
    })
});
 
app.listen(3003, function (err) {
    if (err) console.log(err)
    console.log('Server listening on Port 3003');
});
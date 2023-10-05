import express from 'express';
import * as path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __dirname = fileURLToPath(dirname(import.meta.url));

app.use(express.static(path.join(__dirname, 'build')));

app.set('trust proxy', (ip) => {
  if (ip === '127.0.0.1' || ip === '192.168.1.6'){
    console.log( 'ip correcta', ip)
    return true; // trusted IPs
  }else return false;
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
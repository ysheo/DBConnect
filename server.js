import express from 'express';
import dotenv from 'dotenv';
import bodyParser  from 'body-parser';

import {scalar} from './src/scalar.js';
import {list} from './src/list.js';
import {datatable} from './src/datatable.js';

const app = express();
dotenv.config();

const port = process.env.SERVER_PORT || 3000;

//request body를 하기 위해 꼭 필요한 구문
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/Interface/Scalar', scalar);
app.use('/Interface/List', list);
app.use('/Interface/DataTable', datatable);

app.get('/', (req, res) => {
    console.log( process.env.SERVER_PORT, '번 포트에서 대기중');
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${ process.env.SERVER_PORT}`);
});
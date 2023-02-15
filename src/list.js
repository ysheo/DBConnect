import express from 'express';
import { tcpcmConnPool } from './connTcPCM.js';

let list = express.Router();
/* POST */
list.post('/', async function(req, res, next) {
    const result = await queryExec(req.body.query, req.body.dbInfo);
    res.send(result);
});

const queryExec = async (q,db) => {
    const pool = await tcpcmConnPool(db);
    const result = await pool.request()
    .query(q)
    .catch((err) => {
        return {"error" : err.message};
    });

    let json = {
        data : Object.keys(result).includes('error')? "": [].concat(...result.recordset.map(value => Object.values(value))),
        error:  result.error ?? null
    }
    pool.close();
    return json;
};

export {list};
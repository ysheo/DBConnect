import express from 'express';
import { tcpcmConnPool } from './connTcPCM.js';

let datatable = express.Router();
/* POST */
datatable.post('/', async function(req, res, next) {
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
        data : result.recordset,
        error:  result.error ?? null
    }
    pool.close();
    return json;
};

export {datatable};
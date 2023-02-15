import express from 'express';
import { tcpcmConnPool } from './connTcPCM.js';

let scalar = express.Router();
/* POST */
scalar.post('/', async function(req, res, next) {
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
        data : Object.keys(result).includes('error')? "": Object.values(result.recordset[0])[0],
        error:  result.error ?? null
    }
    pool.close();
    return json;
};

export {scalar};
import sql from 'mssql';
import {  tcpcm_config, dbConfig } from '../config.js';

const tcpcmConnPool =(db)=>{
  let config = tcpcm_config.dbconfig;
  config.datebase = db == 0 ? dbConfig.tcpcm : dbConfig.bridge;
  config.options.datebase = db == 0 ? dbConfig.tcpcm : dbConfig.bridge;

  return new sql.ConnectionPool(tcpcm_config.dbconfig)
      .connect()
      .then((pool) => {
          return pool;
      })
      .catch((err) => {
        console.log('err ', err);
        console.log('config : ', tcpcm_config.dbconfig);
      });
}

export {
  sql,
  tcpcmConnPool
}
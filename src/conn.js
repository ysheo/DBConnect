import sql from 'mssql';
import { bridge_config, tcpcm_config } from '../config.js';


const bridgeConnPool = new sql.ConnectionPool(bridge_config.dbconfig)
.connect()
.then((pool) => {
    console.log('bridge_config');
    return pool;
})
.catch((err) => {
    console.log('err ', err);
    console.log('config : ', bridge_config.dbconfig);
});

    
const tcpcmConnPool = new sql.ConnectionPool(tcpcm_config.dbconfig)
.connect()
.then((pool) => {
    console.log('tcpcm_config');
  return pool;
})
.catch((err) => {
  console.log('err ', err);
  console.log('config : ', tcpcm_config.dbconfig);
});

export {
  sql,
  bridgeConnPool,
  tcpcmConnPool
}
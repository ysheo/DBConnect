import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
    tcpcm:process.env.DB_DEV_DATEBASE_TcPCM,
    bridge:process.env.DB_DEV_DATEBASE_Bridge,
};

const tcpcm_config = {
    port: process.env.PORT,
    dbconfig: {
        server: process.env.DB_DEV_SERVER,
        port: parseInt(process.env.DB_DEV_PORT),
        datebase: process.env.DB_DEV_DATEBASE_Bridge,
        pool: {
            max: 5,
            min: 1,
            idleTimeoutMillis: 30000,
        },
        options: {
            encrypt: false,
            datebase: process.env.DB_DEV_DATEBASE_Bridge,
            trustServerCertificate: true,
        },
        authentication: {
            type: 'default',
            options: {
                userName: process.env.DB_DEV_USERNAME,
                password: process.env.DB_DEV_PASSOWRD,
            },
        },
    },
};

export {
    dbConfig,
    tcpcm_config
}
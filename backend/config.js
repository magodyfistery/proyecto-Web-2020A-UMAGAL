
const config = {

    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/umagal_db',  //usa variable de entorno o la mia
    host: process.env.HOST || 'https://localhost',
    IP_HOST: process.env.IP_HOST || '192.168.1.2',
    port: process.env.PORT || 3000,
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    files: process.env.PUBLIC_ROUTE_FILES || '/files'

}

module.exports = config

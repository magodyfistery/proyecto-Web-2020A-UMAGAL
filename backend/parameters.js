const mongoDBTablesNames = {
  // Todo en singular, mongo lo hace plural
    client: "client",
    artist: "artist",
    exhibition: "exhibition"
}

const MESSAGES_WELL_KNOWED = {
    MESSAGE_ERROR_DB: {status: 0, data:[],  msg: "Ha ocurrido un error al buscar en la base de datos"},
    MESSAGE_INVALID_CREDENTIALS: {status: 2, data:[],  msg: "El usuario o la contraseña son incorrectos"},


}


function verifyXSS(cadena){

    var expreg = /^[A-z0-9@\.áéíóú\s]+$/;

    if(expreg.test(cadena) || cadena.contains() )
      return false;
    else
      return true;

}



module.exports = {
    mongoDBTablesNames,
    MESSAGES_WELL_KNOWED,
    verifyXSS
}

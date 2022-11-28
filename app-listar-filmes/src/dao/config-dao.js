
const db = require('../../config/db.config');
const ConfigEntity = require('../entity/config-entity');


module.exports.verificarBaseCarregada = async function(){
   const retorno = await ConfigEntity.findAll().then(function(rows){
    return rows.map((r) => {
        return r.dataValues.baseCarregada;
      });
   });
   return retorno;
};
  
   module.exports.update = function(value){
    const retorno = ConfigEntity.update({baseCarregada:value},{ where: { id: 1 } }).then(function(result){
         return result;
    });

};
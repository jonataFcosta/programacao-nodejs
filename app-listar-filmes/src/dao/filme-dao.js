
const db = require('../../config/db.config');
const FilmeEntity = require('../entity/filme-entity');


module.exports.limparTblFilmes = async function () {
    const retorno = await FilmeEntity.destroy({ truncate: { cascade: false } }).then(function (result) {
        return result;
    });
};

module.exports.listarAPI = async function (limit,offset) {

  
    const retorno = await FilmeEntity.findAll(
        {
            'limit':limit,
            'offset':offset,  
            'order': [['release_date', 'ASC']
    ]}).then(function (rows) {        
        return rows.map((r) => {
            return r.dataValues;
        });
    });
   
    return retorno;

};

module.exports.create = async function (filme) {
    //`id`,`image`,`original_title`,`release_date`,`rt_score`,`title`
    const criar = await FilmeEntity.create({
        id: filme.id,
        image: filme.image,
        original_title: filme.original_title,
        release_date: filme.release_date,
        rt_score: filme.rt_score,
        title: filme.title,
        description: filme.description
    }).then(function (result) {
        return result;
    });

    await criar.save();

};

module.exports.update = async function (filme) {
    const atualizar = await FilmeEntity.update(
        {
            id: filme.id,
            image: filme.image,
            original_title: filme.original_title,
            release_date: filme.release_date,
            rt_score: filme.rt_score,
            title: filme.title,
            description: filme.description
        },
        { where: { id: filme.id } }
    ).then(function (result) {
        return result;
    });

    await atualizar.save();

};

module.exports.delete = async function (filme) {
    const deletar = await FilmeEntity.destroy({ where: { id: filme.id } }).then(function (result) {
        return result;
    });
    await deletar.save();
};

const FilmeController = require('../controllers/filme-controller');


module.exports = (app) => {

   app.get(process.env.APP_ENDPOINT_HEROKU+'/filmes/', FilmeController.listarHEROKU);
   app.get(process.env.APP_ENDPOINT_HEROKU+'/filmes/clearAll', FilmeController.limparTblFilmes);
   app.post(process.env.APP_ENDPOINT_HEROKU+'/filmes/', FilmeController.createHEROKU);

   app.get(process.env.APP_ENDPOINT_API+'/filmes/:page/:limit', FilmeController.listarAPI);
   app.get(process.env.APP_ENDPOINT_API+'/filmes/id/:id', FilmeController.findId);
   app.post(process.env.APP_ENDPOINT_API+'/filmes/', FilmeController.create);
   app.put(process.env.APP_ENDPOINT_API+'/filmes/', FilmeController.update);
   app.delete(process.env.APP_ENDPOINT_API+'/filmes/:id', FilmeController.delete);

}
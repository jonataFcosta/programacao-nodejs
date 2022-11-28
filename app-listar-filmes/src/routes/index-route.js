module.exports = (app) => {
   app.get('/', function(req,res,next){
      res.status(200).send('<Helcome Home Index!>');
   });
}
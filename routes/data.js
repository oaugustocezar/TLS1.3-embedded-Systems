var express = require('express');
var router = express.Router();
var Data = require('../model/db');

/* GET home page. */
router.post('/', async function(req, res, next) {

  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  var time = (today.getHours()) + ":" + today.getMinutes() + ":" + today.getSeconds();  

  console.log(res.req);
  
  
  let posts = await Data.insert(res.req.body.latitude, res.req.body.longitude, res.req.body.velocity,date, time);
  res.status(200).json({"mensagem": "Mensagem postada com sucesso"});


});

router.get('/', async function(req,res,next){

  let get = await Data.select();

  
  res.json(get);
});


router.get('/date',async function(req, res, next){  
  
  let get = await Data.selectByDate(req.query);
  res.json(get);

});



module.exports = router;

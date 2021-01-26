var express = require('express');
var router = express.Router();
var Data = require('../model/db');

/* GET home page. */
router.post('/', async function(req, res, next) {

  var today = new Date();
  var date = today.getDate().toUTCString()+'-'+(today.getMonth()+1).toUTCString()+'-'+today.getFullYear();
  var time = today.getHours().toLocaleString()-3 + ":" + today.getMinutes().toLocaleString() + ":" + today.getSeconds().toLocaleString();  
  
  
  let posts = await Data.insert(req.query.longitude, req.query.latitude, req.query.velocity,date, time);
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

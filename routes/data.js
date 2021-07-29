var express = require('express');
var router = express.Router();
var Data = require('../model/db');

/* GET home page. */
router.post('/', async function(req, res, next) {

  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  var time = (today.getHours()) + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(res.req); 
  let posts = await Data.insert(res.req.body.dispositivo,res.req.body.ciphersuit,res.req.body.latitude, res.req.body.longitude, res.req.body.velocity,date, time);
  res.status(200).json({"mensagem": "Mensagem postada com sucesso"});

});



router.post('/hstime', async function(req,res,next){
  let posts = await Data.insertHsTime(res.req.body.dispositivo,res.req.body.t0Handshake,res.req.body.t1Handshake,res.req.body.ciphersuit);
  
  res.status(200).json({"mensagem": "Tempo do handshake inserido com sucesso"});
});

router.post('/commtime', async function(req,res,next){

  let posts = await Data.insertCommTime(res.req.body.dispositivo,res.req.body.ciphersuit,res.req.body.t0,res.req.body.t1);
  res.status(200).json({"mensagem": "Tempo da comunicação inserida com sucesso"});

});

router.get('/', async function(req,res,next){
  if(req.query.dispositivo){
    let get = await Data.findByDispositivo(req.query.dispositivo);  
    res.json(get);
  }else{
    let get = await Data.select();
    res.json(get);
  }  

});
router.get('/hstime',async function(req,res,next){  
  let get = await Data.getHsTime();
  console.log(get)
  res.json(get);
});


router.get('/date',async function(req, res, next){  
  
  let get = await Data.selectByDate(req.query);
  res.json(get);

});



module.exports = router;

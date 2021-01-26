# backend Fog Computing

Servidor em NodeJs e MongoDB. 

route /data com metodo get retorna os dados armazenados no banco de dados.  
route /data com metodo post insere no banco os dados recebidos como parâmetros,
sendo eles latitude, longitude, velocidade, data e horario atual do servidor. 

Exemplo do uso do post na route /data: 

https://backend-fogcomp.herokuapp.com/data?longitude=-23.339395009666084&latitude=-51.13708098963875&velocidade=30

deploy em https://backend-fogcomp.herokuapp.com/ 


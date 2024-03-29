const MongoClient = require('mongodb').MongoClient;

//const url = process.env.BDAPP;

const url ="mongodb+srv://admin:admin@cluster0.zikk2.mongodb.net/application?retryWrites=true&w=majority";

module.exports = class Posts{

    static async insert(dispositivo,ciphersuit,latitude, longitude, velocity, date, time){
        const conn = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('information').insertOne({
            dispositivo: dispositivo,
            ciphersuit: ciphersuit,
            latitude : latitude, 
            longitude : longitude,
            velocity : velocity,
            date : date,
            time : time
        });
        conn.close();
        return result;
    }
    static async findByDispositivo(dispositivo,ciphersuit){
        const conn = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('information').find({
            dispositivo : dispositivo,
            ciphersuit:ciphersuit
        }).toArray();
        conn.close();
        return result;
    }


    static async select(){
        const conn = await MongoClient.connect(url);
        const db = conn.db();       
        let result = await db.collection('information').find().toArray();
        conn.close();
        return result;

    }

    static async selectByDate(date){
        const conn = await MongoClient.connect(url);
        const db = conn.db();       
        let result = await db.collection('information').find(date).toArray();
        conn.close();
        return result;
    }

    static async insertHsTime(dispositivo,ths0,ths1,ciphersuit){
        const conn  = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('metricasHS').insertOne({
            dispositivo : dispositivo,
            ciphersuit:ciphersuit,
            t0Handshake : ths0,
            t1Handshake : ths1
        });
        conn.close();
        return result;
    }

    static async getHsTime(dispositivo, ciphersuit){
        const conn  = await MongoClient.connect(url);
        const db = conn.db(); 
        let result; 
        if(dispositivo){
            result = await db.collection('metricasHS').find({
                dispositivo : dispositivo,
                ciphersuit:ciphersuit
            }).toArray();   

        }else{
            result = await db.collection('metricasHS').find().toArray();
        }
       
            
        conn.close();
       
        return result;   
    }

    static async insertCommTime(dispositivo,ciphersuit,t0,t1){
        const conn  = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('metricas').insertOne({
            dispositivo: dispositivo,
            ciphersuit: ciphersuit,
            t0 : t0, 
            t1 : t1
        });
        conn.close();
        return result;
    }

    static async getCommTime(dispositivo,ciphersuit){
        const conn  = await MongoClient.connect(url);
        const db = conn.db(); 
        let result; 
        if(dispositivo){
            result = await db.collection('metricas').find({
                dispositivo : dispositivo,
                ciphersuit:ciphersuit
            }).toArray();   

        }else{
            result = await db.collection('metricasHS').find().toArray();
        }
       
            
        conn.close();
        console.log(result)
        return result;   
        
    }
}




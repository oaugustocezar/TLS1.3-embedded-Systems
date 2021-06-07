const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://admin:admin@cluster0.zikk2.mongodb.net/application?retryWrites=true&w=majority";

module.exports = class Posts{

    static async insert(dispositivo,latitude, longitude, velocity, date, time){
        const conn = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('information').insertOne({
            dispositivo: dispositivo,
            latitude : latitude, 
            longitude : longitude,
            velocity : velocity,
            date : date,
            time : time
        });

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

    static async insertHsTime(dispositivo,ths0,ths1){
        const conn  = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('metricasHS').insertOne({
            dispositivo : dispositivo,
            t0Handshake : ths0,
            t1Handshake : ths1
        });
        conn.close();
        return result;
    }

    static async insertCommTime(dispositivo,t0,t1){
        const conn  = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('metricas').insertOne({
            dispositivo: dispositivo,
            t0 : t0, 
            t1 : t1
        });
        conn.close();
        return result;
    }

    static async getCommTime(){

    }
}




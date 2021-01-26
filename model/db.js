const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://admin:admin@cluster0.zikk2.mongodb.net/application?retryWrites=true&w=majority";

module.exports = class Posts{

    static async insert(latitude, longitude, velocity, date, time){
        const conn = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('information').insertOne({

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
}




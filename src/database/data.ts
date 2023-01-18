// import mongodb from "mongodb"
// import dotenv from "dotenv"


// dotenv.config()

// export const mongoDBConnection = async() => mongodb.connect(
//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology : true
//     },
//     async (error: any, client: { db: () => any; }) => {
//         if(error) throw error;
//         console.log("DB connected")
//         const database = client.db()
//         const collection = database.collection("medicine");

//         let dataFromMongo = await collection.find().toArray;
//         console.log(dataFromMongo);
//     }
// )
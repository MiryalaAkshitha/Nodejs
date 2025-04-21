const {MongoClient} = require("mongodb");

const url = 'mongodb+srv://miryalaakshitha27:tUX4wm4ECv3I9kv2@nodeproject.karv6gp.mongodb.net/'

const client = new MongoClient(url)
// Database Name
const dbName = 'helloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    const data={
"first name" :"abhinavs",
"last name" :"chikyala",
"city" :"Hyderbad"
    }
    //insert document
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    // read documents
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    //update document

    // const updateResult = await collection.updateOne({ "first name": "abhinavs" }, { $set: { "first name": "abhinavuu" } });
    // console.log('Updated documents =>', updateResult);

//     const deleteResult = await collection.deleteMany({ "first name": "abhinavs" });
// console.log('Deleted documents =>', deleteResult);
  
    return 'done.';
  }
 
  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
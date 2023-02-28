const { MongoClient} = require('mongodb');

async function main() {

  const uri = 'mongodb+srv://salocode14:ztE2xMGshHh5gWgz@cluster0.ku5nov8.mongodb.net/?retryWrites=true&w=majority'

  const client = new MongoClient(uri);

  try {
    await client.connect(); // returns promise

    await listDatabases(client);
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  databasesList.databases.forEach(db => {
    console.log(`${db.name}`)
  })
}
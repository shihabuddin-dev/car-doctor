import { MongoClient, ServerApiVersion } from "mongodb"
export const collectionNameObj = {
  servicesCollection: 'services',
  userCollection: 'users',
}

export default async function dbConnect(collectionName) {
  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  return client.db(process.env.DB_NAME).collection(collectionName)
}
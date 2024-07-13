const { MongoClient, ServerApiVersion } = require("mongodb");
let db;
export const connectDB = async () => {
  if (db) return db;

  try {
    const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db('carService')
    return db;
  } catch (error) {}
};

const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    const page = parseInt(event.queryStringParameters.page || '1');
    const limit = 10;
    const skip = (page - 1) * limit;

    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        const results = await collection.find({}).skip(skip).limit(limit).toArray();
        const totalResults = await collection.countDocuments();

        return {
            statusCode: 200,
            body: JSON.stringify({ results, totalResults }),
        };
    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};

module.exports = { handler };

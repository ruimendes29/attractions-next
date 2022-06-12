import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { name, image, location } = data;
    console.log(data);
    const client = await MongoClient.connect(
      "mongodb+srv://landmarks-user:M4m4Cn7fenSaIMGc@cluster0.ac96r.mongodb.net/landmarks?retryWrites=true&w=majority"
    );
    const db = client.db();
    const landmarksCollection = db.collection("landmarks");
    const result = await landmarksCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({});
  }
};
export default handler;

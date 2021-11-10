import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const user = process.env.DB_USER;
    const password = process.env.DB_PASS;

    const client = await MongoClient.connect(
      `mongodb+srv://${user}:${password}@cluster0.xaika.mongodb.net/bookClubMeetings?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetingsCollection = db.collection("meetings");

    const result = await meetingsCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "Meeting added!" });
  }
}

export default handler;

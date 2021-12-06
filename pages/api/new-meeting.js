import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const user = process.env.DB_USER;
    const password = process.env.DB_PASS;

    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://${user}:${password}@cluster0.xaika.mongodb.net/bookClubMeetings?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    let db = client.db();

    try {
      const result = await db.collection("meetings").insertOne(data);
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed to add meetup!" });
      return;
    }

    //console.log(result);
    client.close();
    res.status(201).json({ message: "Meeting added!" });
  }
}

export default handler;

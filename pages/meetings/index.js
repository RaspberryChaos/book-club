import MeetingList from "../../components/MeetingList.js";
import { MongoClient } from "mongodb";
import Head from "next/head";

const MeetingsPage = (props) => {
  return (
    <>
    <Head>
      <title>Book Club - All Meetings</title>
    </Head>
    <div className="container">
      <h1 className="pageHeading">Upcoming Meetings</h1>
      <MeetingList meetings={props.meetings} />
    </div>
    </>
  );
};

export async function getStaticProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;

  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${password}@cluster0.xaika.mongodb.net/bookClubMeetings?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetingsCollection = db.collection("meetings");

  const meetings = await meetingsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetings: meetings.map((meeting) => ({
        title: meeting.title,
        author: meeting.author,
        description: meeting.description,
        address: meeting.address,
        date: meeting.date,
        image: meeting.image,
        id: meeting._id.toString(),
      })),
    },
    revalidate: 60,
  };
}

export default MeetingsPage;

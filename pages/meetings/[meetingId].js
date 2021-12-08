import { MongoClient, ObjectId } from "mongodb";
import styles from "../../styles/MeetingDetails.module.css";
import Head from "next/head";
import Image from "next/image";

const MeetingDetails = ({
  title,
  author,
  address,
  image,
  date,
  description,
  id,
}) => {
  return (
    <>
      <Head>
        <title>Book Club - {title} Meeting</title>
        <meta name="description" content="Find out all the details for this book club meeting"/>
      </Head>
      <section className={styles.container}>
        <h1 className="pageHeading">
          {title} by {author}
        </h1>
        <div className="imageContainer">
          <Image src={image} width={250} height={200} />
        </div>
        <p className={styles.details}>Meeting Date: {date}</p>
        <p className={styles.details}>Address: {address}</p>
        <p>Details: {description}</p>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;

  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${password}@cluster0.xaika.mongodb.net/bookClubMeetings?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetingsCollection = db.collection("meetings");

  const meetings = await meetingsCollection
    .find()
    .project({ _id: 1 })
    .toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetings.map((meeting) => ({
      params: { meetingId: meeting._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetingId = context.params.meetingId;

  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;

  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${password}@cluster0.xaika.mongodb.net/bookClubMeetings?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetingsCollection = db.collection("meetings");
  const meeting = await meetingsCollection.findOne({
    _id: ObjectId(meetingId),
  });
  client.close();

  return {
    props: {
      title: meeting.title,
      author: meeting.author,
      address: meeting.address,
      image: meeting.image,
      date: meeting.date,
      description: meeting.description,
      id: meeting._id.toString(),
    },
    revalidate: 60,
  };
}

export default MeetingDetails;

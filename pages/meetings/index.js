import MeetingList from "../../components/MeetingList.js";
import { MongoClient } from "mongodb";

const placeholderMeetings = [
  {
    id: "meeting_1",
    bookTitle: "Normal People",
    author: "Sally Rooney",
    image:
      "https://s26162.pcdn.co/wp-content/uploads/sites/2/2018/11/normal-people-1.jpg",
    address: "12 random street, Paris",
    description: "Let's meetup and discuss this book together",
    date: "12 January 2021",
  },
  {
    id: "meeting_2",
    bookTitle: "American Dirt",
    author: "Jeanine Cummins",
    image:
      "https://images.csmonitor.com/csm/2020/01/1096827_1_1230-american-dirt_standard.jpg?alias=standard_900x600nc",
    address: "12 random street, Paris",
    description: "Let's meetup and discuss this book together",
    date: "15 September 2021",
  },
  {
    id: "meeting_3",
    bookTitle: "Dark Matter",
    author: "Blake Crouch",
    image:
      "https://www.scifinow.co.uk/wp-content/uploads/2016/08/Dark-Matter-Blake-Crouch-768x1182.jpg",
    address: "12 random street, Paris",
    description: "Let's meetup and discuss this book together",
    date: "5 October 2021",
  },
];

const MeetingsPage = (props) => {
  return (
    <div className="container">
      <h1 className="pageHeading">Upcoming Meetings</h1>
      <MeetingList meetings={props.meetings} />
    </div>
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
  console.log("meetings", meetings);
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

import MeetingList from "../../components/MeetingList.js";

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

const containerStyle = {
  backgroundColor: "var(--clr-blue)",
  minHeight: "100vh",
};

const MeetingsPage = () => {
  return (
    <div style={containerStyle}>
      <h1 className="pageHeading">Upcoming Meetings</h1>
      <MeetingList meetings={placeholderMeetings} />
    </div>
  );
};

export default MeetingsPage;

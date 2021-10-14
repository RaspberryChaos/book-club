import SingleMeeting from "./SingleMeeting.js";
import styles from "../styles/MeetingList.module.css";

const MeetingList = (props) => {
  return (
    <ul className={styles.grid}>
      {props.meetings.map((meeting) => (
        <SingleMeeting
          key={meeting.id}
          id={meeting.id}
          image={meeting.image}
          title={meeting.bookTitle}
          author={meeting.author}
          address={meeting.address}
          date={meeting.date}
        />
      ))}
    </ul>
  );
};

export default MeetingList;

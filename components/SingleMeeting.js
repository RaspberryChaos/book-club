import { useRouter } from "next/router";
import styles from "../styles/SingleMeeting.module.css";

function SingleMeeting(props) {
  const router = useRouter();

  return (
    <li className={styles.container}>
      <div>
        <img src={props.image} alt={props.title} width={100} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <p>{props.date}</p>
      </div>
      <div>
        <button
          onClick={() => {
            router.push({
              pathname: "/meetings/[meetingId]",
              query: { meetingId: props.id },
            });
          }}
        >
          Show Details
        </button>
      </div>
    </li>
  );
}

export default SingleMeeting;

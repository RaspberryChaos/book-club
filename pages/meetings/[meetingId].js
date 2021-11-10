const MeetingDetails = (props) => {
  return (
    <section>
      <h1>Meeting Details Page</h1>
      <p>Book Title</p>
      <p>{props.id}</p>
      <p>Author</p>
      <p>Date</p>
      <p>Address</p>
      <p>Description</p>
    </section>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { meetingId: "meeting_1" },
      },
      {
        params: { meetingId: "meeting_2" },
      },
      {
        params: { meetingId: "meeting_3" },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetingId = context.params.meetingId;
  return {
    props: {
      id: meetingId,
    },
  };
}

export default MeetingDetails;

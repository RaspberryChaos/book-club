import NewMeetingForm from "../components/NewMeetingForm";
import { useRouter } from "next/router";
import Head from "next/head";

const AddNewMeeting = () => {
  const router = useRouter();
  async function handleAddMeeting(enteredData) {
    const response = await fetch("/api/new-meeting", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log("data", data);
    router.push("/meetings");
  }

  return (
    <>
      <Head>
        <title>Book Club - Add a new meeting</title>
      </Head>
      <div className="container">
        <h1 className="pageHeading">Add a New Meeting</h1>
        <NewMeetingForm onAddMeeting={handleAddMeeting} />
      </div>
    </>
  );
};

export default AddNewMeeting;

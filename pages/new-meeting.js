import NewMeetingForm from "../components/NewMeetingForm";

const AddNewMeeting = () => {
  const handleAddMeeting = (enteredData) => {
    console.log(enteredData);
  };

  return (
    <div className="container">
      <h1 className="pageHeading">Add a New Meeting</h1>
      <NewMeetingForm onAddMeeting={handleAddMeeting} />
    </div>
  );
};

export default AddNewMeeting;

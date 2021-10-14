import { useRef } from "react";

function NewMeetingForm(props) {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetingData = {
      title: enteredTitle,
      author: enteredAuthor,
      image: enteredImage,
      address: enteredAddress,
      date: enteredDate,
      description: enteredDescription,
    };

    props.onAddMeeting(meetingData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Book Title</label>
          <input type="text" id="title" ref={titleInputRef} required />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} required />
        </div>

        <div>
          <label htmlFor="image">Image (URL)</label>
          <input type="url" id="image" ref={imageInputRef} required />
        </div>

        <div>
          <label htmlFor="address">Meeting Address</label>
          <input type="text" id="address" ref={addressInputRef} required />
        </div>

        <div>
          <label htmlFor="date">Date of Meeting</label>
          <input type="date" id="date" ref={dateInputRef} required />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            ref={descriptionInputRef}
            required
          ></textarea>
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </div>
  );
}

export default NewMeetingForm;

import { useRef } from "react";
import styles from "../styles/NewMeetingForm.module.css";

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
    <form onSubmit={submitHandler}>
      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Book Title</label>
          <input
            type="text"
            id="title"
            ref={titleInputRef}
            className={styles.inputFields}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            ref={authorInputRef}
            className={styles.inputFields}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">Image (URL)</label>
          <input
            type="url"
            id="image"
            ref={imageInputRef}
            className={styles.inputFields}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Meeting Address</label>
          <input
            type="text"
            id="address"
            ref={addressInputRef}
            className={styles.inputFields}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="date">Date of Meeting</label>
          <input
            type="date"
            id="date"
            ref={dateInputRef}
            className={styles.inputFields}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            ref={descriptionInputRef}
            className={styles.inputFields}
            required
          ></textarea>
        </div>
        <div>
          <button className={styles.formBtn}>Add Meeting</button>
        </div>
      </div>
    </form>
  );
}

export default NewMeetingForm;

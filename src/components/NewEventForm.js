// style
import "./NewEventForm.css";
import { useState } from "react";

function NewEventForm() {
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  return (
    <form className="new-event-form">
      <label>
        <span>Event title:</span>
        <input type="text" onChange={(e) => settitle(e.target.value)} />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" onChange={(e) => setdate(e.target.value)} />
      </label>
      <button>Submit</button>
      <hr />
      <p>Title: {title}</p>
      <p>Date: {date}</p>
    </form>
  );
}

export default NewEventForm;

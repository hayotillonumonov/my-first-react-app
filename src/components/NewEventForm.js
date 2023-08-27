// Style
import "./NewEventForm.css";
import { useRef } from "react";
// import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

function NewEventForm({ newEvent }) {
  const title = useRef();
  const date = useRef();
  const location = useRef();
  const form = useRef();
  // const [title, settitle] = useState("");
  // const [date, setdate] = useState("");
  // const [location, setlocation] = useState("andijon");

  const resetInputs = () => {
    form.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title.current.value,
      date: date.current.value,
      location: location.current.value,
      id: uuidv4(),
    };
    newEvent(event);
    resetInputs();
  };
  return (
    <form ref={form} className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event title:</span>
        <input type="text" ref={title} />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" ref={date} />
      </label>
      <label>
        <span>Event Location: </span>
        <select ref={location}>
          <option value="andijon">Andijon</option>
          <option value="fergana">Farg'ona</option>
          <option value="tashkent">Toshkent</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default NewEventForm;

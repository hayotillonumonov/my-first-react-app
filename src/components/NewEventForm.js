// Style
import "./NewEventForm.css";

import { useState } from "react";

import { v4 as uuidv4} from "uuid";

function NewEventForm({newEvent}) {
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const resetInputs = ()=>{
    settitle('')
    setdate('')
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const event ={
      title: title,
      date: date,
      id: uuidv4()
    }

    newEvent(event)

    resetInputs()
  }
    return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event title:</span>
        <input type="text" onChange={(e) => settitle(e.target.value)} value={title} />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" onChange={(e) => setdate(e.target.value)} value={date}/>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default NewEventForm;
import "./App.css";
import { useState } from "react";
import Title from "./components/title";
import Modal from "./components/Modal";
import Eventlist from "./components/Eventlist";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showcontent, setShowContent] = useState(true);
  const [events, setEvents] = useState([]);

  const newEvent = (event) => {
    setEvents((prev) =>{
      return [...prev, event]
    })
    setShowModal(false)
  }

  //Delete items

  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  return (
    <div className="App">
      <Title
        title="Hayotillo's Kingdim Events"
        subtitle="All events will be here"
      />
      <br />
      <Title
        title="Islombek's Kingdim Events"
        subtitle="All events will be here"
      />
      <br />
      {showcontent && (
        <button onClick={() => setShowContent(false)}>Hide Content</button>
      )}
      {!showcontent && (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}

      {showcontent && <Eventlist events={events} handleDelete={handleDelete} />}

      {showModal && (
        <Modal>
          <NewEventForm newEvent={newEvent}/>
        </Modal>
      )}
      <br />
      <br />
      {!showModal && (
        <button onClick={() => setShowModal(true)}>New Event</button>
      )}
    </div>
  );
}

export default App;

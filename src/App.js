import "./App.css";
import { useState } from "react";
import Title from "./components/title";
import Modal from "./components/Modal";
import Eventlist from "./components/Eventlist";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showcontent, setShowContent] = useState(true);
  const [events, setEvents] = useState([
    { title: "akhror's birthday party", id: 1 },
    { title: "doniyor's live stream", id: 2 },
    { title: "match: manchester united vs barcelona", id: 3 },
  ]);

  //Delete items

  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  // toggle modal function

  const closeModal = () => {
    setShowModal(false);
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
        <Modal closeModal={closeModal}>
          <h2>Hayotillo Numonov </h2>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
            corrupti.
          </p>
        </Modal>
      )}
      <br />
      <br />
      {!showModal && (
        <button onClick={() => setShowModal(true)}>Show modal</button>
      )}
    </div>
  );
}

export default App;
